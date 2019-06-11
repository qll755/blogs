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
            修改主题
            <el-color-picker v-model="color" @active-change="colorChange"></el-color-picker>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "#2B7179"
    };
  },
  methods: {
    colorChange(color) {
      var rgb = color.split(",");
      var r = parseInt(rgb[0].split("(")[1]);
      var g = parseInt(rgb[1]);
      var b = parseInt(rgb[2].split(")")[0]);
      var hex = +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      this.$emit("backgroundchange", hex);
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
.el-dropdown-menu__item {
  position: relative;
}
.el-color-picker {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
  opacity: 0;
}
.el-color-picker__trigger {
  width: 100%;
}
</style>
