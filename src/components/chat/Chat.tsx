/** @format */

import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useReduxHooks'
import { api } from '../../state/api-rtk/api-rtk'
import { IChat } from '../../state/slice/messanger/messenger.interface'
import { Typography } from '../../ui/Typography'
// @ts-ignore: next-line
import styles from './Chat.module.scss'
import ChatBox from './chatBox/ChatBox'
import Conversation from './conversation/Conversation'

type Props = {}

const Chat = (props: Props) => {
  const { user } = useAppSelector(state => state.authSlice)

  const { data: profile } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  const { getAllChats, getOneChat } = useActions()

  const { chat, currentChat, messages, lastMessage } = useAppSelector(
    state => state.MessengerSlice
  )

  const fetchCallback = React.useCallback((id: string) => {
    getOneChat(id)
  }, [])

  React.useEffect(() => {
    getAllChats()
  }, [])

  console.log(chat)

  if (!user) {
    return null
  }

  const changeAvatar = (data: IChat, currentUser: string) => {
    if (data.receiverId.id === currentUser) {
      return data.senderId
    } else {
      return data.receiverId
    }
  }

  return (
    <div className={styles.Chat}>
      <div className={styles.leftSideChat}>
        <div className={styles.chatContainer}>
          <div className={styles.chatList}>
            {chat.length > 0
              ? chat.map((chat: IChat) => (
                  <div
                    key={chat.id}
                    onClick={() => {
                      fetchCallback(chat.id)
                      console.log(chat.receiverId.id)
                    }}
                  >
                    <Conversation
                      data={chat}
                      currentUser={user?.id}
                      changeAvatar={changeAvatar}
                    />
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
      <div className={styles.rightSigeChat}>
        <ChatBox
          chat={currentChat}
          messages={messages}
          currentUserId={user.id}
          changeAvatar={changeAvatar}
          lastMessage={lastMessage}
        />
      </div>
    </div>
  )
}

export default Chat
