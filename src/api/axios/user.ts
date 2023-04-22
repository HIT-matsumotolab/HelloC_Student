import client from '../client'

export const getUser = (url: string) => {
  return client
    .get(url)
    .then((res: AxiosResponse<any>) => {
      return res.data
    })
    .catch((e: AxiosError<any>) => {
      return e
    })
}
