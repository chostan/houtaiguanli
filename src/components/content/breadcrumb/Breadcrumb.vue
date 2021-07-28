<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="title2">用户管理</slot>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
      <slot name="title3">用户列表</slot>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
};
</script>

<style lang="less" scoped>
</style>
