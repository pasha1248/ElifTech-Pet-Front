/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { carSelectServise } from '../../../services/car/carSelect.service'
import { IGetCarModule } from './car-select.slice'

export const getAllBrand = createAsyncThunk(
  'car/getAllBrand',
  async (_, thunkAPI) => {
    try {
      const response = await carSelectServise.getAllCarsBrand()

      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const getYears = createAsyncThunk(
  'car/getYears',
  async (_, thunkAPI) => {
    try {
      const response = await carSelectServise.getYears()

      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const getTypesCar = createAsyncThunk(
  'car/getTypesCar',
  async (_, thunkAPI) => {
    try {
      const response = await carSelectServise.getTypesCar()

      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const getCarModel = createAsyncThunk<string[]>(
  'car/getCarModel',
  async ({ brand, type, year }: any, thunkAPI): Promise<any> => {
    try {
      const response = await carSelectServise.getCarModel(brand, type, year)

      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)
