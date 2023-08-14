<template>
  <!-- 组件出口位置 -->
  <div>
    <router-view v-slot="{ Component }">
      <!-- 渲染layout以及路由组件的子路由 -->
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
    <!-- <transition name="fade">
      <router-view />
    </transition> -->
  </div>
</template>

<script setup lang="ts">
// 引入watch监听属性
import { nextTick, ref, watch } from 'vue'
// 获取仓库
import useLayOutSettingStore from '@/store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
// 控制当前组件是否销毁重建
let flag = ref(true)
// 监听仓库中的数据是否发生变化，说明用户点击过刷新按钮
watch(
  () => layOutSettingStore.refresh,
  () => {
    // 重新加载页面
    flag.value = false
    // 当响应式数据变化完毕后，获取更新后的DOM
    nextTick(() => {
      flag.value = true
    }, 0)
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
