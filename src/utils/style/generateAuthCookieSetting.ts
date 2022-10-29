type AuthCookieSetting = {
  expires: Date
}

/**
 * HelloCの認証用トークンの設定を返します
 * @return {AuthCookieSetting} {expires:有効期限（1日後）}
 */
export const generateAuthCookieSetting: () => AuthCookieSetting = () => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return { expires: date }
}
