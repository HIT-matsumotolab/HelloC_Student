type AuthCookieSetting = {
  expires: Date
}

export const generateAuthCookieSetting: () => AuthCookieSetting = () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return { expires: date }
}
