/** @format */

import React from 'react'

import ProfileMenu from '../profile-menu/ProfileMenu'
// @ts-ignore:next-line
import styles from './IconsRight.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import AuthButtonForHeader from '../auth-botton/AuthButtonForHeader'

type Props = {}

const IconsRight = (props: Props) => {
  const { isAuth } = useAppSelector(state => state.authSlice)

  return (
    <div className={styles.icons}>
      {isAuth ? (
        <>
          <ProfileMenu />
        </>
      ) : (
        <AuthButtonForHeader />
      )}
    </div>
  )
}

export default IconsRight
