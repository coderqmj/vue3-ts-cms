<template>
  <div class="login-account">
    <!-- model告诉表单要更新哪些值 -->
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item required label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item required label="密码" prop="password">
        <el-input type="passowrd" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/runtime-core';
import { localCache } from '@/utils';

import { rules } from '../config/account-config';
import { ElForm } from 'element-plus';

export default defineComponent({
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    });

    const formRef = ref<InstanceType<typeof ElForm>>();

    // 登录逻辑
    const loginAction = (isKeepPassword: boolean) => {
      // 1.首先得输入格式校验通过才会进行提交
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.是否需要记住密码
          if (isKeepPassword) {
            // 注意只有登录成功才缓存
            localCache.setCache('name', account.name);
            localCache.setCache('password', account.password);
          } else {
            localCache.clearCache();
          }
          // 2.开始进行登录验证
        }
      });
    };
    return {
      account,
      rules,
      loginAction,
      formRef
    };
  }
});
</script>

<style lang="less" scoped></style>
