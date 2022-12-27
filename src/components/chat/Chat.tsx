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

  const { chat, currentChat } = useAppSelector(state => state.MessengerSlice)

  React.useEffect(() => {
    getAllChats()
  }, [])

  console.log(chat)

  if (!user) {
    return null
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
                      getOneChat(chat.receiverId.id)
                      console.log(chat.receiverId.id)
                    }}
                  >
                    <Conversation data={chat} currentUser={user?.id} />
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
      <div className={styles.rightSigeChat}>
        <ChatBox chat={currentChat} currentUserId={user.id} />
      </div>
    </div>
  )
}

export default Chat
