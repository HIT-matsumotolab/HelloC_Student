import client from '../client'

export const getLog = (url) =>
  client
    .get(url)
    .then((res: AxiosResponse<any>) => {
      return res.data
    })
    .catch((e: AxiosError<any>) => {
      return e
    })
