/** @format */

import axios from 'axios'

export const carApi = axios.create({
  baseURL: 'https://car-data.p.rapidapi.com/cars',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_RAPID,
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
  },
})
