/** @format */

import { IBase } from '../base.interface'

export interface IUser extends IBase {
  email: string
  name: string
  isVerified?: boolean
  subscribersCount?: number
  description: string
  avatarPath: string
  articles?: IArticle[]
  subscriptions: ISubscription[]
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
