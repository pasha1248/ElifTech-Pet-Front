/** @format */

import classaname from 'classnames/index'
import React, { FC, PropsWithChildren } from 'react'
import { IButton } from './buttonAuth.interface'
// @ts-ignore
import styles from './ButtonAuth.module.scss'

type Props = {}

const ButtonAuth: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  type,
  icon,
  ...rest
}) => {
  return (
    <>
      <button
        type={type}
        className={classaname(styles.button, className)}
        {...rest}
      >
        {children}
      </button>
      {icon}
    </>
  )
}

export default ButtonAuth
