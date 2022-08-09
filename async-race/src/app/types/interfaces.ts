export interface IStore {
  [key: string]: string | number | ICar[] | IWinner[] | IEngine
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

export interface IWinner {
  id: number
  wins: number
  time: number
}
