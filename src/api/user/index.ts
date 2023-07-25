// 统一管理用户相关的接口
// 引入axios
import request from '@/utils/request'
// 统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}
// 引入ts类型
import type { loginForm, loginResponseData, userResponseData } from './type'
// 对外暴露请求函数
// 登录
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userResponseData>(API.USERINFO_URL)
