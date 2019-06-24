<template>
  <div class="home-header">
    <div class="nav">
      <span>首页</span>
      <span>文章</span>
      <span>留言</span>
      <span>格言</span>
    </div>
    <el-dropdown class="nav-btns" @command="jumpPage">
      <el-button type="info">
        <i class="el-icon-files"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">首页</el-dropdown-item>
        <el-dropdown-item command="1">文章</el-dropdown-item>
        <el-dropdown-item command="1">留言</el-dropdown-item>
        <el-dropdown-item command="1">格言</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    jumpPage(e) {
      // 根据返回的参数  进行页面的跳转
    }
  }
};
</script>
<style>
.home-header {
  background: gray;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999999;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}
.nav span {
  display: inline-block;
  padding-top: 15px;
  color: white;
}
.nav span:hover {
  color: cornflowerblue;
  background: rgb(84, 92, 100);
  cursor: pointer;
}
.nav-btns {
  position: fixed;
  right: 10px;
  top: 10px;
  display: none;
}
@media screen and (max-width: 640px) {
  .nav span {
    padding: 1%;
  }
  #app {
    min-width: 100%;
  }
  .nav {
    display: none;
  }
  .nav span:hover {
    color: yellow;
    background: gray;
  }
  .nav-btns {
    display: inline-block;
  }
}
</style>
