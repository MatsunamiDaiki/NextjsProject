export interface Post  {
  id: string
  created_at: string
  user_id: string | undefined
  title: string
  post_url: string
}

export type EditedPost = Omit<Post, "created_at" | "user_id" | "created_at">

export interface Comment  {
  id: string
  created_at: string
  user_id: string | undefined
  post_id: string
  comment: string
}

export type EditedComment = Pick<Comment, "id" | "comment">

export interface Profile {
  id: string | undefined
  updated_at: string
  created_at: string
  username: string | undefined
  avatar_url: string | undefined
  favorites: string | undefined
}

export type EditedProfile = Omit<Profile, "id" | "updated_at" | "created_at">

export interface Notice {
  id: String
  created_at: string
  user_id: string | undefined
  content: string
}

export type EditedNotice = Pick<Notice, "id" | "content">

