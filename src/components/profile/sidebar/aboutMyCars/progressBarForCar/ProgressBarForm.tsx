/** @format */

import React, { FC } from 'react'
import clx from 'classnames'
// @ts-ignore:next-line
import styles from './ProgresBarForm.module.scss'
//
import { AiOutlineCar } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'
import { IoIosPhotos } from 'react-icons/io'
import { useMultiForm } from '../../../../../hooks/useMultiForm'

type Props = {}

const ProgressBarForm: FC<{ page: number }> = ({ page }) => {
  console.log(page)

  const switchPage = () => {
    if (page === 1) {
      return styles.step1
    }
    if (page === 2) {
      return styles.step2
    }
    if (page === 3) {
      return styles.step3
    }
  }

  const number = 1

  return (
    <div className={styles.container}>
      <ul className={switchPage()}>
        <li className={`${page === 1 || 2 ? styles.active : ''}`}>
          <span>
            <AiOutlineCar size={30} />
          </span>
        </li>
        <li className={`${page === 1 ? '' : styles.active}`}>
          <span>
            <FaTools size={30} />
          </span>
        </li>
        <li className={`${page === 3 && styles.active}`}>
          <span>
            <IoIosPhotos size={30} />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default ProgressBarForm
