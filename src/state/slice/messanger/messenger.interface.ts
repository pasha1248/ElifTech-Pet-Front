/** @format */

import { IBase } from '../base.interface'
import { IUser } from '../user-slice/user.interface'

export interface IChat extends IBase {
  messages: IMessage[]
  receiverId: IUser
  senderId: string
}

export interface IMessage extends IBase {
  text: string
  chatId: string
  senderId: string
  chatOwner: IChat
}

export interface ICreateNessageDto {
  senderId: string
  chatId: string
  text: string
}
