/** @format */

import { IUser } from '../slice/user-slice/user.interface'

export interface IPhotosCar {
  createdAt: string
  id: string
  isMain: boolean
  path: string
  updatedAt: string
}

export interface ICar {
  name: string
  id: string

  rate?: number

  model: string

  description: string

  photosPath: IPhotosCar[]

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
