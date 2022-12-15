/** @format */

import { InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import React from 'react'

export interface IFieldProps {
  error?: FieldError | any
  children?: React.ReactNode
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
