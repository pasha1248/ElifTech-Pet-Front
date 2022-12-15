/** @format */

import { carApi } from '../../api/carApi.axios'

export const carSelectServise = {
  async getAllCarsBrand() {
    const responce = await carApi.get('/makes/')

    return responce.data
  },

  async getTypesCar() {
    const responce = await carApi.get('/types/')

    return responce.data
  },

  async getYears() {
    const responce = await carApi.get('/years/')
    const newResponce = responce.data.sort().reverse()

    return newResponce
  },

  async getCarModel(make: string, year: string, type: string) {
    const responce = await carApi.get(
      `?limit=50&make=${make}&year=${year}&type${type}`
    )
    return responce.data
  },
}
