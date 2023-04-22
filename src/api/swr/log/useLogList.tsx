import useSWR from 'swr'
import { getLog as fetcher } from '../../axios/log/getLog'

import client from '../../client'

export const useLogList = () => {
  const {
    data: data,
    error,
    mutate
  } = useSWR(`/log`, fetcher, {
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
