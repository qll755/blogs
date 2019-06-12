<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :background-color="AsideColor"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="jumpPage"
  >
    <el-menu-item index="home">
      <i class="el-icon-location"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="drafts">
      <i class="el-icon-tickets"></i>
      <span slot="title">草稿箱</span>
    </el-menu-item>
    <el-menu-item index="publish">
      <i class="el-icon-printer"></i>
      <span slot="title">发表文章</span>
    </el-menu-item>
    <el-menu-item index="textType">
      <i class="el-icon-edit"></i>
      <span slot="title">文章类别</span>
    </el-menu-item>
    <el-menu-item index="leaveMessage">
      <i class="el-icon-date"></i>
      <span slot="title">文章留言</span>
    </el-menu-item>
    <el-menu-item index="comment">
      <i class="el-icon-message"></i>
      <span slot="title">文章评论</span>
    </el-menu-item>
    <el-menu-item index="accountSetting">
      <i class="el-icon-setting"></i>
      <span slot="title">账户设置</span>
    </el-menu-item>
    <el-menu-item index="0">
      <i class="el-icon-error"></i>
      <span slot="title">注销退出</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  props: ["AsideColor"],
  methods: {
    jumpPage(e) {
      if (e === "0") {
        // 退出当前账户并销毁session
      } else {
        // 跳转页面的方法
        this.$router.push("/admin/" + e);
      }
    }
  }
};
</script>
<style>
.el-menu {
  border: 0px solid saddlebrown;
  background-color: transparent;
}
.el-menu-item:hover {
  color: white;
  background: rgba(0, 0, 0, 0.3);
}
.el-menu-item.is-active {
  color: black !important;
}
</style>
