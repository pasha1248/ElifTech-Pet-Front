/** @format */

import { carApi } from '../../api/carApi.axios'

export const carSelectServise = {
  async getAllCarsBrand() {
    const responce = await carApi.get('/makes/')

    return responce.data
  },
}
