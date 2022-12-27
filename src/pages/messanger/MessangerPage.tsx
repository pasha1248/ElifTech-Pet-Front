/** @format */

import React from 'react'
import Chat from '../../components/chat/Chat'
import MyFriends from '../../components/profile/myCommunity/frends/MyFriends'
import { useActions } from '../../hooks/useActions'
import { useAppSelector } from '../../hooks/useReduxHooks'
// @ts-ignore: next-line
import styles from './MessangerPage.module.scss'

interface Props {}

const MessangerPage = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <Chat />
      </div>
      <div>
        <MyFriends />
      </div>
    </div>
  )
}

export default MessangerPage
