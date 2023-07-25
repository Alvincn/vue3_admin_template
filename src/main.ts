// @ts-ignore
import { createApp } from 'vue'
// @ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 引入自定义插件对象：注册整个项目全局组件
import global from '@/components/index.ts'
app.use(global)
// 引入
import 'virtual:svg-icons-register'
// 引入模板全局样式
import '@/styles/index.scss'
// 注册路由
import router from '@/router/index.ts'
app.use(router)
// 安装仓库
import store from '@/store/index.ts'
app.use(store)
app.mount('#app')
