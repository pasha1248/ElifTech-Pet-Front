/** @format */

import React, { FC } from 'react'
import { IVideoItem } from './article-item.interface'
import cn from 'classnames'
// @ts-ignore:next-line
import styles from './ArticleItem.module.scss'
import { BiEdit, BiTrash } from 'react-icons/bi'
import VideoStatistics from './ArticleStatistics'
import { Link, useNavigate } from 'react-router-dom'
import UserAvatar from '../user/user.avatar/UserAvatar'

const SmallVideoItem: FC<IVideoItem> = ({ isSmall, removeHandler, item }) => {
  const navigate = useNavigate()

  return (
    <div
      className={cn(styles.article_item, {
        [styles.small]: isSmall,
      })}
    >
      <div className={styles.thumbnail}>
        {item.photoPath && (
          <img src={item.photoPath} alt={item.name} width={185} height={103} />
        )}

        {item?.user?.avatarPath && (
          <div className='absolute right-3 -bottom-7'>
            <UserAvatar user={item.user} />
          </div>
        )}
      </div>

      <div className={styles.information}>
        {!isSmall && <div className={styles.author}>{item.user?.name}</div>}
        <Link to={`/article/${item.id}`}>
          <p className={styles.name}>{item.name}</p>
        </Link>
        <VideoStatistics
          views={item.views}
          createAt={!isSmall ? item.createdAt : undefined}
        />
      </div>
    </div>
  )
}

export default SmallVideoItem
