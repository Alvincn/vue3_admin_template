<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider" :class="{ fold: LayOutSettingStore.fold }">
      <Logo />
      <!-- 展示菜单 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          :default-active="$router.path"
          background-color="#03152b"
          text-color="white"
          :collapse="LayOutSettingStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold }">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold }">
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
// 引入logo
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
// 引入tabbar
import Tabbar from './tabbar/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
// 获取layout相关的小仓库
import useLayOutSettingStore from '@/store/modules/setting'
// 获取当前路由
import { useRoute } from 'vue-router'
let $router = useRoute()
let userStore = useUserStore()
let LayOutSettingStore = useLayOutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.5s;
    .scrollbar {
      width: 100%;
      height: calc(100% - $base-menu-logo-height);
    }
    &.fold {
      transition: all 0.5s;
      width: $base-menu-min-width;
    }
    .el-menu {
      border: none;
    }
  }
  .layout_tabbar {
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.5s;

    &.fold {
      transition: all 0.5s;
      left: $base-menu-min-width;
      width: calc(100vw - $base-menu-min-width);
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.5s;
    &.fold {
      transition: all 0.5s;
      left: $base-menu-min-width;
      width: calc(100vw - $base-menu-min-width);
    }
  }
}
</style>
