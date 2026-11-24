// Images live in the public Supabase Storage bucket "etheriarestart".
// File names there don't follow the game ids, so each image is mapped by hand.
// To add one: upload it to the bucket, then add `id: 'folder/file'` below.

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ??
  'https://kwycuaelznjibrqnjfup.supabase.co'
const BUCKET = 'etheriarestart'

export const storageUrl = (path: string) =>
  `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`

/** Animus id -> storage path */
const animusImages: Record<number, string> = {
  30051: 'Animus/dokidoki_sm.webp',
  30101: 'Animus/Helkid_sm.webp',
  30151: 'Animus/Massiah_sm.webp',
  30251: 'Animus/Lilith_sm.webp',
  30301: 'Animus/Heinrich_sm.webp',
  30501: 'Animus/Tiamat_sm.webp',
  30601: 'Animus/rahu_sm.webp',
  30651: 'Animus/lily_icon.webp',
  30701: 'Animus/beyontin_sm.webp',
  30751: 'Animus/Lingluo_sm.webp',
  30801: 'Animus/holden_sm.webp',
  30851: 'Animus/Ninfoniel_sm.webp',
  30901: 'Animus/Veronica_sm.webp',
  30951: 'Animus/liliam_sm.webp',
  31051: 'Animus/Celince_sm.webp',
  31101: 'Animus/Hoyan_sm.webp',
  31151: 'Animus/yeli_sm.webp',
  31201: 'Animus/tsukiyomi_sm.webp',
  31251: 'Animus/freya_sm.webp',
  31351: 'Animus/mia_sm.webp',
  31401: 'Animus/nahor_sm.webp',
  31451: 'Animus/borgne_sm.webp',
  31501: 'Animus/fuqiu_sm.webp',
  31551: 'Animus/mio_sm.webp',
  31601: 'Animus/plume_sm.webp',
  31651: 'Animus/koka_sm.webp',
  31701: 'Animus/nevette_sm.webp',
  31801: 'Animus/raymnerry_sm.webp',
  31851: 'Animus/lowan_sm.webp',
  31901: 'Animus/santik_sm.webp',
  31951: 'Animus/airon_s.webp',
  32001: 'Animus/palin_sm.webp',
  32051: 'Animus/kethos_s.webp',
  40181: 'Animus/chiaki_sm.webp',
  40331: 'Animus/RC-77_Sm.webp',
  40456: 'Animus/rin-unbowed_sm.webp',
  40491: 'Animus/Sania_sm.webp',
  40661: 'Animus/viper_sm.webp',
  40691: 'Animus/Valerian_sm.webp',
  40751: 'Animus/mizuki_sm.webp',
  40781: 'Animus/hizuki_sm.webp',
  40841: 'Animus/sylph_sm.webp',
  40901: 'Animus/senyu_sm.webp',
  46161: 'Animus/turandot_sm.webp',
}

/** Shell unit id -> storage path */
const shellImages: Record<number, string> = {
  54131: 'shell/Leg_Golden_Lion.webp',
  54151: 'shell/Leg_Law_of_Silence.webp',
  54171: 'shell/Leg_Supernova.webp',
  54221: 'shell/Leg_Alicorn.webp',
  54241: 'shell/Leg_Codex_of_Magic.webp',
  54361: 'shell/Leg_White_Fang.webp',
  54371: 'shell/Leg_Gigabyte.webp',
  54401: 'shell/Leg_Artisan.webp',
  54411: 'shell/Leg_Black_Moon.webp', // "Dark Moon" in game data
  54421: 'shell/Leg_Halloween.webp',
  54431: 'shell/Leg_Count.webp',
  54441: 'shell/Leg_Lighthouse.webp',
  54451: 'shell/Leg_Jackal_Guard.webp',
  54461: 'shell/Leg_Revelation.webp',
  54471: 'shell/Leg_amber.webp',
  54481: 'shell/Leg_fortissimu.webp',
  54491: 'shell/Leg_Reaper_Steps.webp',
  54501: 'shell/Leg_Ouroboros.webp',
  54511: 'shell/Leg_Sword_VII.webp',
  54521: 'shell/Leg_Tiger_Yin.webp',
}

/** attr id -> storage path */
const attrImages: Record<number, string> = {
  1: 'element/ele_reason.webp',
  2: 'element/ele_odd.webp',
  3: 'element/ele_hollow.webp',
  4: 'element/ele_disorder.webp',
  5: 'element/ele_constant.webp',
}

const lookup = (map: Record<number, string>, id: number) =>
  map[id] ? storageUrl(map[id]) : undefined

export const animusImageUrl = (id: number) => lookup(animusImages, id)
export const shellImageUrl = (id: number) => lookup(shellImages, id)
export const attrImageUrl = (attr: number) => lookup(attrImages, attr)
