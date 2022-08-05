export interface IStore {
  [key: string]: string | number | ICar[] | IEngine
}

export interface ICar {
  id: number
  name: string
  color: string
}

export interface IEngine {
  distance?: number
  velocity?: number
  success?: boolean
}
