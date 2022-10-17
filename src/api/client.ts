import axios from 'axios'

export const API_HOST = `${process.env.NEXT_PUBLIC_API_URL}`
//TODO 必要であればエラーの共通処理なども検討する
const axiosClient = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

export default axiosClient
