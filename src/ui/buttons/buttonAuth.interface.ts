/** @format */

import { ButtonHTMLAttributes, FC } from 'react'
import { IconType } from 'react-icons/lib'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType
}
