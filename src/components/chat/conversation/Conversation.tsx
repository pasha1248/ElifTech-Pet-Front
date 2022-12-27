/** @format */

import React from 'react'
import UserAvatar from '../../user/user.avatar/UserAvatar'
// @ts-ignore:next-line
import styles from '../Chat.module.scss'

interface IConversationProps {
  data: any
  currentUser: string
}

const Conversation: React.FC<IConversationProps> = ({ data }) => {
  return (
    <>
      <div className={styles.conversation}>
        <div>
          <UserAvatar user={data.receiverId} isForConversation />
        </div>
        <div>lal</div>
      </div>
      <hr />
    </>
  )
}

export default Conversation
