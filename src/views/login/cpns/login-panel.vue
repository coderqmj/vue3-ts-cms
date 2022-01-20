<template>
  <div>
    <h1>后台管理系统</h1>
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    return {
      message: '哈哈哈'
    };
  }
});
</script>

<style scoped></style>
