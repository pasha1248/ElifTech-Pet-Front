/** @format */

import React from 'react'

// import { api } from '../../../../apps/store/api/api'
// @ts-ignore:next-line
import styles from './ProfileMenu.module.scss'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import { Link } from 'react-router-dom'
import { useActions } from '../../../../hooks/useActions'
import { useOutside } from '../../../../hooks/useOutside'
import { api } from '../../../../state/api-rtk/api-rtk'

type Props = {}

const ProfileMenu = (props: Props) => {
  const { user } = useAppSelector(state => state.authSlice)

  const { data, isLoading } = api.useGetProfileQuery(null, {
    skip: !user,
  })

  const { isShow, setIsShow, ref } = useOutside(false)

  const { logout } = useActions()

  if (isLoading) {
    return null
  }

  return (
    <div ref={ref} className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        <img
          src={
            data?.avatarPath ||
            'http://cdn-icons-png.flaticon.com/512/147/147142.png'
          }
          alt={data?.name || 'avatar'}
          width={40}
          height={40}
        />
        <span className={styles.name}>{data?.name}</span>
        {isShow ? <GoChevronUp /> : <GoChevronDown />}
      </button>

      {isShow && (
        <div className={styles['profile-menu']}>
          <ul>
            <li>
              <Link to={`/my-page/${user?.id}`}>
                <p>My page</p>
              </Link>
            </li>
            <li>
              <Link to={`/studio`}>
                <p>My posts</p>
              </Link>
            </li>
            <li>
              <Link to={'/update'} />
              <p>Update Profile</p>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
