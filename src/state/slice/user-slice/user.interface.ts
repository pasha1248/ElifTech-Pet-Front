/** @format */

import { IBase } from '../base.interface'

export interface IUser extends IBase {
  articles: IArticle[] | []
  avatarPath: string
  cars: [] | any
  description: string
  email: string
  firstName: string
  id: string
  isVerified: string
  lastName: string
  subscribersCount: number
  subscriptions: any
  background: string
}

export interface IArticle extends IBase {
  name: string
  views: number
  likes?: number
  description: string
  videoPath?: string
  user?: IUser
  photoPath?: string
  comments: IComment[]
}

export interface IArticleDto extends IArticle {}

export interface ISubscription extends IBase {
  toChannel: IUser
}

export interface IComment extends IBase {
  user: IUser
  article: IArticle
  message: string
}

export interface ICommentDto extends Pick<IComment, 'message'> {
  videoId: number
}
