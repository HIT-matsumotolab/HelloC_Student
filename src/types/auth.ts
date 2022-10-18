export type AuthErrorResponse = {
  errors: string[]
  accessToken: null
}

export type AuthResponse = {
  user_id: string
  name: string
  mail: string
  role: string
  accessToken: string
}

export type AuthRequest = {
  mail: string
  password: string
}
