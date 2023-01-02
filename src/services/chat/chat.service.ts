/** @format */

import api from '../../api/axios'

export const ChatService = {
  async createChat(receiverId: string) {
    const responce = await api.get(`chat/create?receiverId=${receiverId}`)

    return responce.data
  },

  async getAllUserChats() {
    const responce = await api.get('chat/getAll')

    return responce.data
  },

  async getOneChat(chatId: string) {
    const responce = await api.get(`chat/getOne?chatId=${chatId}`)
    return responce.data
  },

  async createMessage(dto: { senderId: string; chatId: string; text: string }) {
    const responce = await api.post('message/create', dto)

    return responce.data
  },

  async deleteMessage(messageId: string) {
    const responce = await api.delete(`message/${messageId}`)

    return responce.data
  },
}
