/** @format */

import { toast } from 'react-toastify'
// import { MessageLink } from './MessageLink'

export const notifyInfo = (text: string) =>
  toast.info(`${text}`, {
    position: 'top-right',
    hideProgressBar: true,
    autoClose: 1000,
  })

export const notifyError = (text: any) =>
  toast.error(`${text}`, {
    position: 'top-right',
    hideProgressBar: true,
    autoClose: 3000,
  })

export const notifySuccess = (text: string) =>
  toast.success(`${text}`, {
    position: 'top-right',
    hideProgressBar: true,
    autoClose: 3000,
  })

export const notifySuccessSendCode = (id: any, text: string) =>
  toast.update(id, {
    render: text,
    type: 'success',
    isLoading: false,
    autoClose: 10000,
  })

export const notifyLoading = (isLoading: any) =>
  toast.promise(isLoading, {
    pending: 'Promise is pending',
    success: 'Promise resolved 👌',
    error: 'Promise rejected 🤯',
  })

export interface IMessage {
  id: number
  conversationId: number
  senderId: number
  text: string
  createdAt: Date
  updatedAt: Date
}

// export const notifyMessage = (text: string, message: IMessage) => {
//   toast.success(<MessageLink message={message} notificationText={text} />, {
//     position: 'top-right',
//     hideProgressBar: true,
//   })
// }
