import useSWR from 'swr'

import client from '../../client'

const fetcher = (url: string) =>
  client
    .get(url)
    .then((res: AxiosResponse<any>) => {
      return res.data
    })
    .catch((e: AxiosError<any>) => {
      return e
    })

export const useLog = (id: string) => {
  const {
    data: data,
    error,
    mutate
  } = useSWR(`/log/${id}`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false
  })

  console.log(data)

  //   return {
  //     user: user?.data?.user,
  //     isLoading: !error && !user,
  //     mutate,
  //     isError: error?.statusText
  //   }
}
