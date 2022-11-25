/** @format */

import React, { FC, forwardRef } from 'react'
import { IField } from './field.interface'
import className from 'classnames'
//@ts-ignore
import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
  ({ error, type = 'text', style, ...rest }, ref) => {
    return (
      <div
        className={className(styles.input, { [styles.errorField]: error })}
        style={style}
      >
        <input type={type} ref={ref} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
export default Field
