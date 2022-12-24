/** @format */

import api from '../../api/axios'
import { IForgotPassword } from '../../components/signInForm/auth.interface'
import { IUser } from '../../state/slice/user-slice/user.interface'

export const UserServiseFront = {
  async getProfileFromParam(id: string) {
    const response = await api.get<IUser>(`user/by-id/${id}`)

    return response.data
  },
}
