/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { notifyError } from '../../../common/notifications/notifications'
import { UserServiseFront } from '../../../services/user/user.service'

export const getProfileFromParam = createAsyncThunk(
  'car/getProfileFromParam',
  async (id: string, thunkAPI) => {
    try {
      const response = await UserServiseFront.getProfileFromParam(id)
      return response
    } catch (e: any) {
      if (e instanceof AxiosError) {
        notifyError(e.response?.data?.message)
        return thunkAPI.rejectWithValue(e.response?.data?.message)
      }
    }
  }
)
