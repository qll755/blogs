<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside>
        <AsideLeft/>
      </el-aside>
      <el-main>
        <router-view>
          <router-view></router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from "./../components/header"; //引入头部信息
import AsideLeft from "./../components/aside"; //左侧导航栏
export default {
  components: { Header, AsideLeft },
  created() {}
};
</script>
<style>
.el-header {
  padding: 0;
  height: auto !important;
}
.el-aside {
  height: 91vh;
  background: #545c64;
  width: 21vh !important;
}
.el-header {
  background: rgb(43, 113, 121);
  color: white;
}
.el-main {
  background: gainsboro;
}
</style>
