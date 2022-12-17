interface IAbRequired {
  a: number
  b: string
}

let ab: IAbRequired = {
  a: 1,
  b: 'test'
}

type WeakInterface<T> = {
  [K in keyof T]?: T[K]
}

let allOptional: WeakInterface<IAbRequired> = {}