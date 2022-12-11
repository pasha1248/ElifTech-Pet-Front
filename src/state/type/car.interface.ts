/** @format */

import { IUser } from '../slice/user-slice/user.interface'

export interface ICar {
  name: string

  rate?: number

  model: string

  description: string

  photoPath: string

  generation: string

  yearOfPurchase: string

  year: string

  color: string

  pastCar: boolean

  brand: string

  engineCapacityLiters: string

  distance: string

  motor: string

  user: IUser

  subscribers: any
}
