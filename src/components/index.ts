import SvgIcon from './SvgIcon/index.vue'
const allGlobalComponent: Object = {
  SvgIcon,
}
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((item) => {
      // @ts-ignore
      app.component(item, allGlobalComponent[item])
    })
  },
}
