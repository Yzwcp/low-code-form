import axios from 'axios'
const instance = axios.create({
  timeout: 10 * 1000,
})
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
    const resData = (response.data || {}) as ResType<any>
    const { errno, data, msg } = resData
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export type ResType<T> = {
  errno: number
  data?: T
  msg?: string
}

export default instance
