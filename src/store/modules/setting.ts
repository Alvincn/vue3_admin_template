// 引入小仓库
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      // 侧边栏是否展开
      fold: false,
      // 刷新功能
      refresh: false,
    }
  },
})
export default useLayOutSettingStore
