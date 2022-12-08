/** @format */

import React, { FC } from 'react'
import cn from 'classnames'
// @ts-ignore:next-line
import styles from './UserAvatar.module.scss'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IUser } from '../../../state/slice/user-slice/user.interface'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
  user,
  isWhite,
}) => {
  return (
    <Link to={`/my-page/${user.id}`}>
      <p>
        <span className={cn(styles.avatar, { [styles.white]: isWhite })}>
          <img
            width={45}
            height={45}
            alt={user.firstName}
            src={user.avatarPath || ''}
          />
          {user.isVerified && (
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
