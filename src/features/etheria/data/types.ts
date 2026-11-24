// Shapes of the JSON files written by scripts/build-etheria-data.mjs

export type UnitRef = {
  id: number
  name: string
  nameTh: string
}

export type PropRef = {
  id: number
  name: string
  nameTh: string
  isRate: boolean
}

export type Animus = {
  id: number
  codeName: string
  name: string
  nameTh: string
  title: string
  titleTh: string
  rarity: number
  attr: number
  star: number
  skillIds: number[]
  cv: { ja: string | null; zh: string | null } | null
  recommendation: {
    partners: UnitRef[]
    keyProps: PropRef[]
    starterShells: UnitRef[]
  } | null
}

export type Shell = UnitRef & {
  variantId: number
  combineStar: number
  type: number
  hp: number
  atk: number
  def: number
  spd: number
  setIds: number[]
}

export type ShellSet = {
  id: number
  bonuses: {
    pieces: number
    props: (PropRef & { value: number })[]
  }[]
}
