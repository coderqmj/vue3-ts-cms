<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 属性
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const currentTab = ref<string>('account');

    // 方法
    const handleLoginClick = () => {
      console.log(currentTab.value);
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        console.log('执行手机登录');
      }
    };
    return {
      isKeepPassword,
      accountRef,
      currentTab,
      handleLoginClick
    };
  }
});
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
