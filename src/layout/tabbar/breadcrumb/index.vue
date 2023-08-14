<template>
  <el-icon style="margin: 0 10px; cursor: pointer" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator="/">
    <!-- 面包屑动态展示路由的名字以及标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :to="item.path"
      :key="index"
      v-show="item.meta.title"
    >
      <el-icon style="margin: 0 4px; vertical-align: top">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// 引入小仓库
import useLayOutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let LayOutSettingStore = useLayOutSettingStore()
// 引入路由
let $route = useRoute()
// 控制图标切换
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>
<style scoped></style>
