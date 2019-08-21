<template>
  <div class="talking">
    <h3>说点什么：</h3>
    <el-row>
      <el-col :span="18">
        <el-input v-model="message" placeholder="请输入内容" />
      </el-col>
      <el-col :span="6">
        <el-button>发送</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return { message: "" };
  }
};
</script>
<style scoped>
.talking{
  margin: 20px 0;
}
</style>


