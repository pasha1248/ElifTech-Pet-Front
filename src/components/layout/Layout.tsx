/** @format */

import React from 'react'
import Header from './header/Header'
// @ts-ignore: Unreachable code error
import styles from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={`${styles.wrapper} p-2`}>{children}</div>
    </section>
  )
}
