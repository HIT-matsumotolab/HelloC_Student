export type AuthErrorResponse = {
  errors: string[]
  accessToken: null
}

export type LoginResponse = {
  user_id: string
  name: string
  mail: string
  role: string
  accessToken: string
}

export type RegisterResponse = {
  accessToken: string
}

export type AuthRequest = {
  name: string
  mail: string
  password: string
}
