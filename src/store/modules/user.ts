// 创建用户相关的小仓库
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
// 引入数据类型
import { loginForm, loginResponseData } from '@/api/user/type'
//引入自己的类型
import type { UserState } from './types/types'
// 引入操作本地存储
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 创建用户小仓库
let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN() || '',
    }
  },
  actions: {
    async userLogin(loginForm: loginForm) {
      let result: loginResponseData = await reqLogin(loginForm)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        // 保证当前async函数返回的是一个成功的promise
        return 'ok'
      } else {
        return Promise.reject(new Error('登录失败'))
      }
    },
  },
  getters: {},
})
// 对外暴露获取小仓库的方法
export default useUserStore
