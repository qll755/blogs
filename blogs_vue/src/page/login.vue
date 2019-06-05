<template>
  <div class="warp">
    <el-form label-width="80px" :rules="rules" :model="from">
      <el-form-item label="账号" prop="username">
        <el-input v-model="from.username" placeholder="以字母开头的6-8位数"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="from.password"></el-input>
      </el-form-item>
      <el-form-item class="btns">
        <el-button @click="click">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from "./../api/webapi/user";

export default {
  data() {
    var regun = (rule, value, callback) => {
      var reg = /^[a-zA-Z]\w{5,8}$/g;
      if (!reg.test(value)) {
        callback(new Error("格式不正确！！！"));
      } else if (value === "") {
        callback(new Error("请输入账户"));
      } else {
        callback();
      }
    };
    return {
      from: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: regun, trgger: "blur" }]
      }
    };
  },
  methods: {
    click() {
      var reg = /^[a-zA-Z]\w{5,9}$/g;
      var falg = !reg.test(this.from.username) || this.from.password == "";
      if (falg) {
        this.$message.error("请认真填写！！！");
      } else {
        this.register();
      }
    },
    async register() {
      var result = await login({
        username: this.from.username,
        pwd: this.from.password
      });
      if (result) {
        this.$message({
          message: "欢迎回家！！",
          type: "success"
        });
      } else {
        this.$message.error("密码或账号错误！！！");
        this.init();
      }
    },
    init() {
      this.from.password = "";
      this.from.username = "";
    }
  },
  created() {}
};
</script>
<style>
.warp {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-form {
  display: block;
  width: 400px;
}
</style>
