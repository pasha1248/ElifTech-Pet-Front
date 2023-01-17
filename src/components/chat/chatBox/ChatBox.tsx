/** @format */

import EmojiPicker from 'emoji-picker-react'
import React, { useRef } from 'react'
import {
  IChat,
  IMessage,
} from '../../../state/slice/messanger/messenger.interface'
import UserAvatar from '../../user/user.avatar/UserAvatar'
// @ts-ignore: next-line
import styles from './ChatBox.module.scss'
import Message from './message/Message'
// @ts-ignore: next-line
import InputEmoji from 'react-input-emoji'

import io from 'socket.io-client'
import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks'
import { useActions } from '../../../hooks/useActions'
import {
  addNewMessage,
  refershOnlineUser,
} from '../../../state/slice/messanger/messenger.slice'
import { saveOnlineUsers } from '../../../state/slice/websoket/websocket.slice'

type Props = {
  chat: IChat
  currentUserId: string
  messages: IMessage[]
  changeAvatar: any
  lastMessage: any
}

export interface IWebSocketActiveUser {}

const ChatBox = ({
  chat,
  currentUserId,
  messages,
  changeAvatar,
  lastMessage,
}: Props) => {
  const { user } = useAppSelector(state => state.authSlice)

  const { currentChatId, currentChat } = useAppSelector(
    state => state.MessengerSlice
  )

  const [newMessage, setNewMessage] = React.useState('')
  const [onlineUsers, setOnlineUsers] = React.useState([])

  const [sendMessage, setSendMessage] = React.useState({})

  const [recieveMessage, setRecieveMessage] = React.useState<any>({})

  const dispatch = useAppDispatch()

  const socket = useRef<any>()

  const scroll = useRef<HTMLDivElement | null>(null)

  const { createMessage } = useActions()

  const handleChange = (newMessages: string) => {
    setNewMessage(newMessages)
  }

  React.useEffect(() => {
    socket.current = io('http://localhost:3001')
    socket.current.emit('newUserAdd', user?.id)
    socket.current.on('getUsers', (users: any) => {
      dispatch(saveOnlineUsers(users))
    })
  }, [])
  React.useEffect(() => {
    async function refersh() {
      await socket.current.on('recieveMessage', (data: any) => {
        dispatch(addNewMessage({ recieveMessage: data, currentUserId }))

        console.log(data)
      })
    }
    refersh()
  }, [])

  React.useEffect(() => {
    if (!recieveMessage) return

    if (
      recieveMessage?.chatId === currentChatId &&
      recieveMessage?.senderId !== currentUserId
    ) {
      dispatch(addNewMessage(recieveMessage))
    }
  }, [recieveMessage])

  console.log(onlineUsers)

  React.useEffect(() => {
    socket.current.emit('createMessage', newMessage)
  }, [newMessage])

  React.useEffect(() => {
    socket.current.on('onMessage', (newMessage: string) => {})
  }, [])

  const hendleSend = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    if (newMessage.length !== 0) {
      if (e.target) e.preventDefault()

      const trueUser = changeAvatar(chat, currentUserId)
      const message = {
        senderId: currentUserId,
        chatId: chat.id,
        text: newMessage,
        setNewMessage,
        receiverId: trueUser.id,
        socket: socket.current,
      }

      createMessage(message)

      const receiver = chat.receiverId.id
      setSendMessage({
        senderId: currentUserId,
        chatId: chat.id,
        text: newMessage,
        receiverId: receiver,
      })
    }
  }

  React.useEffect(() => {
    scroll.current?.scrollIntoView()
  }, [messages])

  return (
    <div className={styles.chatBoxContainer}>
      {chat.receiverId ? (
        <>
          <div>
            <div className={styles.chatHeader}>
              <div className={styles.follower}>
                {chat?.receiverId && (
                  <UserAvatar user={changeAvatar(chat, currentUserId)} />
                )}
              </div>
            </div>
          </div>

          <div className={styles.chatBody}>
            {messages &&
              messages.map((message, id) => (
                <div
                  ref={scroll}
                  key={message.id + String(id)}
                  className={`${
                    message.senderId === currentUserId
                      ? styles.messageOwn
                      : styles.message
                  }`}
                >
                  <Message message={message} />
                </div>
              ))}
          </div>

          <div className={styles.chatSender}>
            <div>+</div>
            <InputEmoji
              value={newMessage}
              onChange={handleChange}
              onEnter={hendleSend}
              cleanOnEnter
            />
            <p
              onClick={hendleSend}
              className='text-blue-600 flex items-center justify-center border-2 border-blue-500 border-solid rounded-3xl py-2 px-4 cursor-pointer  text-white bg-transparent bg-opacity-80 transition-all duration-300 hover:bg-blue-200	'
            >
              Send
            </p>
          </div>
        </>
      ) : (
        <span className={styles.checkBoxEmptyMessage}>
          Tap on a Chat to start conversation
        </span>
      )}
    </div>
  )
}

export default ChatBox
