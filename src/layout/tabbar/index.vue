<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb />
    </div>
    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './tabbarSetting/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
<style scoped lang="scss">
.tabbar {
  background-image: linear-gradient(to right, #ffffff, #adb0b6, #a4a0a0);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar-left {
    display: flex;
    align-items: center;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
    img {
      margin: 0 10px;
    }
  }
}
</style>
