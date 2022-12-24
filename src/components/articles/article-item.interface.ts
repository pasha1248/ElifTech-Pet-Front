/** @format */

import { IArticle, IUser } from '../../state/slice/user-slice/user.interface'

export interface IVideoItem {
  item: IAllItemsForMainSearch
  removeHandler?: (articleId: number) => void
  isSmall?: boolean
}

export interface IAllItemsForMainSearch extends IArticle {
  avatarPath: string
  firstName: string
  id: string
  lastName: string
}
