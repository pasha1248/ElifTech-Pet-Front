/** @format */

import React, { FC } from 'react'
import cn from 'classnames'
// @ts-ignore:next-line
import styles from './UserAvatar.module.scss'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IUser } from '../../../state/slice/user-slice/user.interface'
import { IAllItemsForMainSearch } from '../../articles/article-item.interface'
import { Typography } from '../../../ui/Typography'
import { io } from 'socket.io-client'
import { useAppSelector } from '../../../hooks/useReduxHooks'

const UserAvatar: FC<{
  user?: IUser | any
  isWhite?: boolean
  isForConversation?: Boolean
}> = ({ user, isWhite, isForConversation }) => {
  // const socket = React.useRef<any>()
  const [isOnline, setIsOnline] = React.useState(false)

  const { onlineUsers } = useAppSelector(state => state.WebsocketSlice)

  console.log(onlineUsers)
  console.log(user.id)

  // // React.useEffect(() => {
  // //   socket.current = io('http://localhost:3001')
  // //   socket.current.emit('checkOnline', user?.id)
  // //   socket.current.on('checkOnline', (result: any) => {
  // //     setIsOnline(result)
  // //     console.log('result', result)
  // //   })
  // // }, [])

  // console.log('result', isOnline)

  return (
    <Link to={`/my-profile/${user && user.id}`}>
      <div className='flex items-center gap-2'>
        <span className={cn(styles.avatar, { [styles.white]: isWhite })}>
          <img
            width={45}
            height={45}
            alt={user && user.firstName}
            src={(user && user.avatarPath) || ''}
          />
          {user && user.isVerified && (
            <span className={styles.isVerified}>
              <AiFillCheckCircle size={20} className={styles.isVerified} />
            </span>
          )}
        </span>
        {!isForConversation ? (
          <div>
            <Typography type='Ag-15-medium'>{`${user?.firstName} ${user?.lastName}`}</Typography>
            {onlineUsers &&
            onlineUsers.find(el => el.idOnliteUser === user.id) ? (
              <div className={styles.onlineDot}>online</div>
            ) : (
              <div>offline</div>
            )}
          </div>
        ) : null}
      </div>
    </Link>
  )
}

export default UserAvatar
