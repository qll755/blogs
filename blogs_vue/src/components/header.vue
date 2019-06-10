<template>
  <div class="header">
    <div class="admin-log">
      <i class="el-icon-menu"/>
      <h3>博客平台管理</h3>
    </div>
    <div class="admin-userinfor">
      <div class="wecome">欢迎您！:</div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          管理员
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>
            主题颜色：
            <el-color-picker v-model="color"></el-color-picker>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      color:'rgb(43, 113, 121)'
    }
  }
};
</script>
<style>
.header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.admin-log h3 {
  display: inline-block;
}
.el-icon-menu {
  font-size: 4rem;
  vertical-align: middle;
}
.admin-userinfor > div {
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: 60%;
  margin-left: 10px;
}
.el-dropdown {
  color: aliceblue;
}
</style>
