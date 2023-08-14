import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGlobalComponent: Object = {
  SvgIcon,
}
export default {
  install(app: any) {
    // 注册项目全部的全局组件
    Object.keys(allGlobalComponent).forEach((item) => {
      // @ts-ignore
      app.component(item, allGlobalComponent[item])
    })
    // 将elementui中所有的图标组件注册
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
