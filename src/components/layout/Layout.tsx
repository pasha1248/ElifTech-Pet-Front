/** @format */

import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
// @ts-ignore: Unreachable code error
import styles from './Layout.module.scss'

interface LayoutProps {
  children: React.ReactNode
  withFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  withFooter = true,
}) => {
  return (
    <section className={styles.container}>
      <Header />
      <div className={`${styles.wrapper} p-2`}>{children}</div>
      {withFooter && <Footer />}
    </section>
  )
}
