/** @format */

import React, { FC, forwardRef, useCallback, useMemo, useState } from 'react'
// @ts-ignore: next-line
import styles from './TextArea.module.scss'
import { ITextArea } from './text-area.interface'
import SimpleMdeReact from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ error, style, withEditor, ...rest }, ref) => {
    const [value, setValue] = useState('Initial')

    const onChange = useCallback((value: string) => {
      setValue(value)
    }, [])

    const autofocusNoSpellcheckerOptions = useMemo(() => {
      return {
        autofocus: true,
        spellChecker: false,
        // maxHeight: '400px',
        placeholder: 'text....',
        status: false,
      }
    }, [])

    return (
      <div className={styles['editor']} style={style}>
        {withEditor ? (
          <SimpleMdeReact
            className={styles.editorCas}
            options={autofocusNoSpellcheckerOptions}
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea ref={ref} {...rest} />
        )}
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)
export default TextArea
