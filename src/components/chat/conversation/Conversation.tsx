/** @format */

import React from 'react'
import { IChat } from '../../../state/slice/messanger/messenger.interface'
import UserAvatar from '../../user/user.avatar/UserAvatar'
// @ts-ignore:next-line
import styles from '../Chat.module.scss'

interface IConversationProps {
  data: IChat
  currentUser: string
  changeAvatar: any
}

const Conversation: React.FC<IConversationProps> = ({
  data,
  currentUser,
  changeAvatar,
}) => {
  return (
    <>
      <div className={styles.conversation}>
        <div>
          <UserAvatar
            user={changeAvatar(data, currentUser)}
            isForConversation
          />
        </div>
        <div>lal</div>
      </div>
      <hr />
    </>
  )
}

export default Conversation
