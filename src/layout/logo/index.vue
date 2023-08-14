<template>
  <div class="logo" v-if="!setting.logoIsHidden">
    <img :src="setting.logo" alt="" />
    <p
      v-if="!LayOutSetting.fold"
      style="transition: all 0.5s; white-space: nowrap"
    >
      &nbsp;{{ setting.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSetting = useLayOutSettingStore()
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  p {
    font-size: $base-menu-title-fontSize;
  }
}
</style>
