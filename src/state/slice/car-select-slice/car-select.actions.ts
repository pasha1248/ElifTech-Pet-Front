/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import {
  notifyError,
  notifySuccess,
} from '../../../common/notifications/notifications'
import { carSelectServise } from '../../../services/car/carSelect.service'
import { IFetchModelCar, IGetCarModule } from './car-select.slice'

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

export const getCarModel = createAsyncThunk<[], IFetchModelCar>(
  'car/getCarModel',
  async ({ brand, type, year }: any, thunkAPI) => {
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

export const getAllYears = createAsyncThunk(
  'car/getAllYears',
  async (_, thunkAPI) => {
    try {
      const response = await carSelectServise.getAllYears()

      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const deletePhoto = createAsyncThunk(
  'car/deletePhoto',
  async ({ photoId, photoUrl }: any, thunkAPI) => {
    try {
      const response = await carSelectServise.deletePhoto(photoId, photoUrl)

      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)

export const upload = createAsyncThunk(
  'car/uploadPhoto',
  async ({ formData, folder, setValue, onChange }: any, thunkAPI) => {
    try {
      const response = await carSelectServise.upload(formData, folder, setValue)
      onChange(response)
      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)
