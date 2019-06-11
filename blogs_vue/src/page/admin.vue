<template>
  <el-container>
    <el-header :style="'background:'+HeaderColor+';'">
      <Header @backgroundchange="corlor"/>
    </el-header>
    <el-container>
      <el-aside :style="'background:'+AsideColor+';'">
        <AsideLeft :corlor="AsideColor"/>
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
  data() {
    return {
      HeaderColor: "#2B7179",
      AsideColor: "#545c64"
    };
  },
  methods: {
    corlor(e) {
      var tennum = parseInt(e, 16);
      var newcolr = tennum + 2681579;
      var hex = "#" + newcolr.toString(16);
      this.HeaderColor = "#" + e;
      this.AsideColor = hex;
    }
  },
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
  width: 21vh !important;
}
.el-header {
  color: white;
}
.el-main {
  background: gainsboro;
}
</style>
