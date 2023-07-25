// 对外暴露配置路由
export const constantRoute = [
  {
    // 登录
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    // 登录
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    // 登录成功后展示的数据
    path: '/',
    name: 'layout',
    component: () => import('@/views/home/index.vue'),
  },
  {
    // 404路由
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 如果上边都没匹配上
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
