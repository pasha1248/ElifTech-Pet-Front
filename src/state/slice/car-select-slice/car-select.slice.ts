/** @format */

import { createSlice } from '@reduxjs/toolkit'
import {
  getAllBrand,
  getCarModel,
  getTypesCar,
  getYears,
} from './car-select.actions'

export interface ICarSelect {
  isLoading: boolean
  allBrand: []
  allYers: []
  allCarTypes: []
  allModel: string[]
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
        state.allModel = action.payload
      })
      .addCase(getCarModel.rejected, (state, action) => {
        state.isLoading = false
      })
  },
})

export const {} = CarSelectSlice.actions

export default CarSelectSlice.reducer
