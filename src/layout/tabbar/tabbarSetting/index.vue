<template>
  <el-button type="primary" :icon="Refresh" circle @click="refresh" />
  <el-button type="primary" :icon="FullScreen" circle />
  <el-button type="primary" :icon="Setting" circle />
  <img
    src="../../../../public/logo.png"
    alt=""
    style="width: 30px; height: 30px; border-radius: 50%"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon-right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
// 引入elementui plus图标
import { Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
// 引入setting小仓库
import useLayOutSettingStore from '@/store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
const refresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}
</script>
<script lang="ts">
export default {
  name: 'Setting',
}
</script>
<style scoped>
img {
  margin: 0 10px;
}
</style>
