export interface IStore {
  [key: string]: string | number | ICar[]
}

export interface ICar {
  id: number
  name: string
  color: string
}
