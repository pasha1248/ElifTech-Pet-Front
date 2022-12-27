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

const UserAvatar: FC<{
  user?: IUser | any
  isWhite?: boolean
  isForConversation?: Boolean
}> = ({ user, isWhite, isForConversation }) => {
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
            <div className={styles.onlineDot}>online</div>
          </div>
        ) : null}
      </div>
    </Link>
  )
}

export default UserAvatar
