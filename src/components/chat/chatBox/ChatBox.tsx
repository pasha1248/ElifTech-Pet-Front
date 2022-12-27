/** @format */

import EmojiPicker from 'emoji-picker-react'
import React from 'react'
import { IChat } from '../../../state/slice/messanger/messenger.interface'
import UserAvatar from '../../user/user.avatar/UserAvatar'
// @ts-ignore: next-line
import styles from './ChatBox.module.scss'
import Message from './message/Message'
// @ts-ignore: next-line
import InputEmoji from 'react-input-emoji'

type Props = {
  chat: IChat
  currentUserId: string
}

const ChatBox = ({ chat, currentUserId }: Props) => {
  console.log(chat)

  const [newMessage, setNewMessage] = React.useState('')

  const handleChange = (newMessages: string) => {
    setNewMessage(newMessages)
  }

  return (
    <div className={styles.chatBoxContainer}>
      <div>
        <div className={styles.chatHeader}>
          <div className={styles.follower}>
            {chat?.receiverId && <UserAvatar user={chat.receiverId} />}
          </div>
        </div>
      </div>

      <div className={styles.chatBody}>
        {chat.messages &&
          chat.messages.map(message => (
            <div
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
        <InputEmoji value={newMessage} onChange={handleChange} />
      </div>
    </div>
  )
}

export default ChatBox
