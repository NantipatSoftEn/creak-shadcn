// Builds the slim JSON files the Etheria pages import, from the raw client
// configs in etheria_static_data/configs.
//
//   npm run build:etheria-data
//   node scripts/build-etheria-data.mjs [configsDir] [outDir]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const configsDir = resolve(process.argv[2] ?? 'etheria_static_data/configs')
const outDir = resolve(process.argv[3] ?? 'src/features/etheria/data')

const readConfig = (name) =>
  JSON.parse(readFileSync(join(configsDir, `${name}.json`), 'utf8'))

/** rows can be a dict of objects, or a dict of positional arrays */
function rowsOf(config) {
  const { fields, rows } = config
  const list = Array.isArray(rows) ? rows : Object.values(rows)
  return list.map((row) =>
    Array.isArray(row) && !Array.isArray(row[0])
      ? Object.fromEntries(fields.map((f, i) => [f, row[i] ?? null]))
      : row
  )
}

const units = new Map(rowsOf(readConfig('unit')).map((u) => [u.id, u]))
const archives = new Map(
  rowsOf(readConfig('cst_archive')).map((a) => [a.id, a])
)
const recommendations = new Map(
  rowsOf(readConfig('cst_recommendation')).map((r) => [r.id, r])
)
const props = new Map(rowsOf(readConfig('propdefine')).map((p) => [p.id, p]))
const shellInfos = rowsOf(readConfig('agt_info'))
// set_type rows are arrays of tiers (one entry per piece-count threshold)
const setTiers = new Map(
  Object.entries(readConfig('set_type').rows).map(([id, tiers]) => [
    Number(id),
    tiers,
  ])
)

const prop = (id) => {
  const p = props.get(id)
  return {
    id,
    name: p?.c_name ?? `#${id}`,
    nameTh: p?.c_name_th ?? p?.c_name ?? `#${id}`,
    isRate: p?.format === 1,
  }
}

const unitName = (id) => {
  const u = units.get(id)
  return {
    id,
    name: u?.cname ?? `#${id}`,
    nameTh: u?.cname_th ?? u?.cname ?? `#${id}`,
  }
}

// ---------------------------------------------------------------- Animus ---
// Playable Animus: formal characters that are not fodder and have a title.
const animus = [...units.values()]
  .filter(
    (u) => u.type === 0 && u.formal === 1 && !u.is_fodder && u.nick_name
  )
  .sort((a, b) => b.rarity - a.rarity || a.id - b.id)
  .map((u) => {
    const archive = archives.get(u.archive)
    const rec = recommendations.get(u.id)
    return {
      id: u.id,
      codeName: u.name,
      name: u.cname,
      nameTh: u.cname_th ?? u.cname,
      title: u.nick_name,
      titleTh: u.nick_name_th ?? u.nick_name,
      rarity: u.rarity,
      attr: u.attr,
      star: u.star,
      skillIds: u.skill_id_list ?? [],
      cv: archive
        ? { ja: archive.cv_ja_en ?? null, zh: archive.cv_zh_en ?? null }
        : null,
      recommendation: rec
        ? {
            partners: rec.best_partner.map(unitName),
            keyProps: rec.key_prop.map(prop),
            starterShells: rec.newbie_best_agt.map(unitName),
          }
        : null,
    }
  })

// ---------------------------------------------------------------- Shells ---
// 5-star shells only (combine_star 5x). For each shell keep its strongest
// variant: highest combine_star, then the one with the most set slots
// (the imprinted variant). agt_info stats are already the max-level values.
const fiveStar = shellInfos.filter(
  (s) => Math.floor(s.combine_star / 10) === 5
)
const bestByUnit = new Map()
for (const s of fiveStar) {
  const unit = units.get(s.unit_id)
  if (!unit || unit.formal !== 1 || /^Weakened /.test(unit.cname ?? '')) {
    continue
  }
  // all star/imprint variants of a shell share its unit_id
  const key = s.unit_id
  const prev = bestByUnit.get(key)
  const better =
    !prev ||
    s.combine_star > prev.combine_star ||
    (s.combine_star === prev.combine_star &&
      s.set_pool.length > prev.set_pool.length)
  if (better) bestByUnit.set(key, s)
}

const describeSet = (id) => {
  const tiers = setTiers.get(id) ?? []
  return {
    id,
    bonuses: tiers.map((t) => ({
      pieces: t.need_value,
      props: t.prop_list.map((p) => ({ ...prop(p.type), value: p.value })),
    })),
  }
}

const shells = [...bestByUnit.values()]
  .map((s) => {
    const setIds = [...new Set(s.set_pool.flat().map(([setId]) => setId))]
    return {
      ...unitName(s.unit_id),
      variantId: s.id,
      combineStar: s.combine_star,
      type: s.type,
      hp: s.hp_add,
      atk: s.attack_add,
      def: s.defence_add,
      spd: s.speed_add,
      setIds,
    }
  })
  .sort((a, b) => b.atk - a.atk)

mkdirSync(outDir, { recursive: true })
const write = (file, data) =>
  writeFileSync(join(outDir, file), JSON.stringify(data, null, 2) + '\n')
write('animus.json', animus)
write('shells.json', shells)
const usedSetIds = [...new Set(shells.flatMap((s) => s.setIds))].sort(
  (a, b) => a - b
)
write('sets.json', usedSetIds.map(describeSet))

process.stdout.write(
  `Wrote ${animus.length} Animus, ${shells.length} Shells, ${usedSetIds.length} sets to ${outDir}\n`
)
