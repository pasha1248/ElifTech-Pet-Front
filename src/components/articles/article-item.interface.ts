/** @format */

import { IArticle } from '../../state/slice/user-slice/user.interface'

export interface IVideoItem {
  item: IArticle
  removeHandler?: (articleId: number) => void
  isSmall?: boolean
}
