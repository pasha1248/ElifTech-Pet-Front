/** @format */

import axios from 'axios'
import api from '../../api/axios'
import { carApi } from '../../api/carApi.axios'
import { IMediaResponse } from './carSelect.interface'

export const carSelectServise = {
  async getAllCarsBrand() {
    const responce = await carApi.get('cars/makes')

    return responce.data
  },

  async getTypesCar() {
    const responce = await carApi.get('cars/types')

    return responce.data
  },

  async getYears() {
    const responce = await carApi.get('cars/years')
    const newResponce = responce.data.sort().reverse()

    return newResponce
  },

  async getCarModel(make: string, type: string, year: string) {
    const responce = await carApi.get(
      `cars?limit=50&make=${make}&year=${year}&type=${type}`
    )
    return responce.data
  },

  async getAllYears() {
    const options = {
      method: 'GET',
      url: 'https://car-api2.p.rapidapi.com/api/years',
      headers: {
        'X-RapidAPI-Key': '7f58a40e54msh22dea8f9a952bebp18d88ajsn4217ff7b5ac0',
        'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
      },
    }

    const respons = await axios.request(options)
    return respons.data
  },

  async getEngine() {
    const options = {
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/cars?model=camry&limit=50',
      headers: { 'X-Api-Key': 'iUepYzSjjEOM1H7PoBZxvg==HypDJjmlunDwPBtG' },
      contentType: 'application/json',
    }

    const respons = await axios.request(options)
    console.log(respons)
    return respons.data
  },

  async upload(
    media: FormData,
    folder?: string,
    setValue?: (val: number) => void
  ) {
    return api.post<IMediaResponse>('/media', media, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: progressEvent => {
        if (setValue) {
          const progress =
            (progressEvent.loaded / (progressEvent.total || 0)) * 100
          setValue(Math.ceil(progress))
        }
      },
    })
  },

  async deletePhoto(photo: string, photoUrl: string) {
    return await api.get(`media?photoId=${photo}&photoUrl=${photoUrl}`)
  },
}
