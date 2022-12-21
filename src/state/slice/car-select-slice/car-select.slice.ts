/** @format */

import { createSlice } from '@reduxjs/toolkit'
import {
  deletePhoto,
  getAllBrand,
  getAllYears,
  getCarModel,
  getTypesCar,
  getYears,
  upload,
} from './car-select.actions'

export interface ICarSelect {
  isLoading: boolean
  allBrand: []
  allYers: []
  allCarTypes: []
  allModel: string[]
  allYearsFromCarApi: []
}

export interface IFetchModelCar {
  brand: string
  type: string
  year: string
}

export interface IGetCarModule {
  yaer: string
  type: string
  brand: string
}

const initialState: ICarSelect = {
  isLoading: false,
  allBrand: [],
  allYers: [],
  allCarTypes: [],
  allModel: [],
  allYearsFromCarApi: [],
}

export const CarSelectSlice = createSlice({
  name: 'carSelect',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllBrand.pending, state => {
        state.isLoading = true
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.isLoading = false
        state.allBrand = action.payload
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(getYears.pending, state => {
        state.isLoading = true
      })
      .addCase(getYears.fulfilled, (state, action) => {
        state.isLoading = false
        state.allYers = action.payload
      })
      .addCase(getYears.rejected, (state, action) => {
        state.isLoading = false
      })

    //

    builder
      .addCase(getTypesCar.pending, state => {
        state.isLoading = true
      })
      .addCase(getTypesCar.fulfilled, (state, action) => {
        state.isLoading = false
        state.allCarTypes = action.payload
      })
      .addCase(getTypesCar.rejected, (state, action) => {
        state.isLoading = false
      })

    //getCarModel

    builder
      .addCase(getCarModel.pending, state => {
        state.isLoading = true
      })
      .addCase(getCarModel.fulfilled, (state, action) => {
        state.isLoading = false

        const getOnlyModel = () => {
          const models: string[] = []
          action.payload.map((model: any) => {
            models.push(model.model)
          })

          return models
        }

        state.allModel = getOnlyModel()

        console.log(state.allModel)
      })
      .addCase(getCarModel.rejected, (state, action) => {
        state.isLoading = false
      })

    //
    builder
      .addCase(getAllYears.pending, state => {
        state.isLoading = true
      })
      .addCase(getAllYears.fulfilled, (state, action) => {
        state.isLoading = false
        state.allYearsFromCarApi = action.payload
      })
      .addCase(getAllYears.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(deletePhoto.pending, state => {
        state.isLoading = true
      })
      .addCase(deletePhoto.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(deletePhoto.rejected, (state, action) => {
        state.isLoading = false
      })
    //
    builder
      .addCase(upload.pending, state => {
        state.isLoading = true
      })
      .addCase(upload.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(upload.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const {} = CarSelectSlice.actions

export default CarSelectSlice.reducer
