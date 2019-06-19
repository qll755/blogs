<template>
  <div>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image :src="'http://192.168.3.15:8080/imgs/'+item+'.jpg'" hight="100%"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="articelItems">
      <articeItem   title="测试" con="测试内容" good="点赞数" talking="讨论" browse="浏览"/>
    </div>
  </div>
</template>
<script>
import  articeItem  from "./../../components/homeArticeItem.vue";
export default {
  data() {
    return {};
  },
  components: {
    articeItem
  },
};
</script>
<style>
.el-carousel__item--card.is-in-stage {
  display: flex;
  align-items: center;
}
.el-carousel__container {
  height: 140px;
}
</style>
