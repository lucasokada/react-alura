interface IAbc {
  a: number
  b: string
  c: boolean
}

type PickAb = Pick<IAbc, 'a' | 'b'>

let pickAbObject: PickAb = {
  a: 1,
  b: 'test'
}

type RecordedCd = Record<'c' | 'd', number>

let recordedCdVar: RecordedCd = {
  c: 1,
  d: 1
}