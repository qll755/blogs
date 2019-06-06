<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view>
          <router-view></router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  created() {}
};
</script>
<style>
</style>
