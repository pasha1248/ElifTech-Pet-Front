/** @format */

import React, { FC } from 'react'
import cn from 'classnames'
// @ts-ignore:next-line
import styles from './UserAvatar.module.scss'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IUser } from '../../../state/slice/user-slice/user.interface'
import { IAllItemsForMainSearch } from '../../articles/article-item.interface'

const UserAvatar: FC<{
  user?: IUser
  user1?: IAllItemsForMainSearch
  isWhite?: boolean
}> = ({ user, isWhite, user1 }) => {
  return (
    <Link to={`/my-profile/${user1 && user1.id}`}>
      <p>
        <span className={cn(styles.avatar, { [styles.white]: isWhite })}>
          <img
            width={45}
            height={45}
            alt={user && user.firstName}
            src={(user && user.avatarPath) || ''}
          />
          {user && user.isVerified && (
            <span className={styles.isVerified}>
              <AiFillCheckCircle className={styles.isVerified} />
            </span>
          )}
        </span>
      </p>
    </Link>
  )
}

export default UserAvatar
