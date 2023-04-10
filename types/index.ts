export interface Profile {
  id: string | undefined
  updated_at: string
  created_at: string
  username: string | undefined
  avatar_url: string | undefined
  favorites: string | undefined
}

export type EditedProfile = Omit<Profile, "id" | "updated_at" | "created_at">