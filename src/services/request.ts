import axios from 'axios'
import { message } from 'antd'
const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: 'http://127.0.0.1:4523/m1/4914487-0-default',
})
export type ResType<T> = {
  errno: number
  data?: T
  msg?: string
}
//拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    const resData = response.data || {}
    const { errno, data, msg } = resData
    if (errno !== 0) {
      if (msg) {
        message.error(msg).then()
      }
      throw new Error(msg)
    }
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
