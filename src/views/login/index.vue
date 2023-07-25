<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>欢迎登录后台系统</h1>
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login_btn"
              @click="login"
              :loading="btnLogin"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
let $router = useRouter()
let btnLogin = ref(false)
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
// 登录表单
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})
// 登录按钮的回调
const login = async () => {
  // 点击登录之后的事情
  btnLogin.value = true
  // 通知仓库发请求
  try {
    await useStore.userLogin(loginForm)
    $router.push('/home')
    ElNotification({
      title: '登录成功',
      message: '欢迎回来',
      type: 'success',
    })
    btnLogin.value = false
  } catch (error) {
    ElNotification({
      title: '登录失败',
      message: (error as Error).message,
      type: 'error',
    })
    btnLogin.value = false
  }
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  .login_form {
    position: relative;
    width: 75%;
    top: 30vh;
    left: 5vw;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      font-size: 40px;
      color: #fff;
      margin-bottom: 20px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
