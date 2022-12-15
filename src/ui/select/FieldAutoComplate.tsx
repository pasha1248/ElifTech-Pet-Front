/** @format */

import { forwardRef, Fragment, useRef, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { FaArrowsAltV } from 'react-icons/fa'
import { AiOutlineCheck } from 'react-icons/ai'
// @ts-ignore:next-line
import styles from '../fields/Field.module.scss'
import classNames from 'classnames'

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

export const FieldAutoComplate = forwardRef(
  ({ selected, setSelected, error, options = [], ...rest }: any, ref) => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')

    let filteredPeople =
      selected === ''
        ? people
        : people.filter(person => person.name.toLowerCase().replace(/\s+/g, ''))

    return (
      <div className=' '>
        <div>
          <div className='relative mt-1'>
            <div
              onClick={() => setOpen(!open)}
              className={classNames(styles.input, {
                [styles.errorField]: error,
              })}
            >
              <input type='text' ref={ref} {...rest} />
              <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                <FaArrowsAltV color='blue' />
              </div>
            </div>

            <div className='absolute z-10 max-h-60 w-full top-14 overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {open
                ? options.map((person: any) => (
                    <div
                      key={person.id}
                      className={`relative cursor-default hover:bg-blue-600 transition	 select-none py-2 pl-10 pr-4 `}
                      onClick={() => {
                        setSelected(person.name)
                        setOpen(false)
                      }}
                    >
                      <div>
                        <span className={`block truncate `}>{person.name}</span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
