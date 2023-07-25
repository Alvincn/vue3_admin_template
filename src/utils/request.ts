import axios from 'axios'
import { ElMessage } from 'element-plus'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})
// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})
// 响应拦截器
request.interceptors.response.use(
  // 这是成功获取到了
  (response) => {
    const res = response.data
    // 如果说不等于200，那么就说明有错误，输出这个错误信息，或者显示Error
    if (res.code !== 200) {
      ElMessage({
        message: res.data.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      // 抛出错误
      return Promise.reject(new Error(res.data.message || 'Error'))
    } else {
      // 否则请求成功，返回请求结果
      return res
    }
  },
  (error) => {
    // 失败的回调
    // 定义一个变量，存储网络错误信息
    let message = ''
    // http状态码
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'Token过期，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址出错'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '网络出现错误'
        break
    }
    ElMessage({
      type: 'error',
      message: message,
    })
    return Promise.reject(error)
  },
)
// 对外暴露
export default request
