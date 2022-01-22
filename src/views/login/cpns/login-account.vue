<template>
  <div class="login-account">
    <!-- model告诉表单要更新哪些值 -->
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item required label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item required label="密码" prop="password">
        <el-input type="passowrd" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/runtime-core';

import { rules } from '../config/account-config';

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    });
    return {
      account,
      rules
    };
  }
});
</script>

<style lang="less" scoped></style>
