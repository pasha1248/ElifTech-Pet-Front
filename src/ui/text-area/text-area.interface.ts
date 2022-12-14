/** @format */

import { TextareaHTMLAttributes } from 'react'
import { IFieldProps } from '../fields/field.interface'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
  IFieldProps

export interface ITextArea extends TypeInputPropsField {
  withEditor?: boolean
}
