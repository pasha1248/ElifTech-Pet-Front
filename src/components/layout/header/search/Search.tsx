/** @format */

import React, { FC } from 'react'
// @ts-ignore:next-line
import styles from './Search.module.scss'
import { BiSearchAlt } from 'react-icons/bi'
import { useSearch } from '../../../../hooks/useSearch'
import SmallVideoItem from '../../../articles/SmallArticleItem'

const Search: FC = () => {
  const { data, handleSearch, searchTerm, isSuccess } = useSearch()

  return (
    <div className={styles.search_top}>
      <label>
        <input
          type='text'
          placeholder='Article search'
          value={searchTerm}
          onChange={handleSearch}
        />
        <BiSearchAlt className={styles.iconSearch} color={'white'} size={24} />
      </label>
      {isSuccess && (
        <div className={styles.result}>
          {data?.length ? (
            data.map(article => (
              <SmallVideoItem isSmall item={article} key={article.id} />
            ))
          ) : (
            <div className='text-white'>Article is not found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Search
