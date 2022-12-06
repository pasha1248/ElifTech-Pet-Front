/** @format */

import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { AppRoute } from '../../../common/enums/app-routes.enum'
// @ts-ignore: Unreachable code error
import styles from './Header.module.scss'
import IconsRight from './icons-right/IconsRight'
import Search from './search/Search'

type Props = {}

const Header: FC = (props: Props) => {
  return (
    <header className={styles.header}>
      <Link to={AppRoute.HOME}>
        <h2 className={styles.logo}>The driver mate</h2>
      </Link>
      <Search />
      <IconsRight />
    </header>
  )
}

export default Header
