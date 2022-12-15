/** @format */

import React, { FC, forwardRef } from 'react'
import { IField } from './field.interface'
import className from 'classnames'
//@ts-ignore
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ error, children, type = 'text', style, ...rest }: any, ref) => {
    return (
      <div
        className={className(styles.input, { [styles.errorField]: error })}
        style={style}
      >
        <span className={styles.icon}>{children}</span>
        <input type={type} ref={ref} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
export default Field
