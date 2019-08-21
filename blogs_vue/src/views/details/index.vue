<template>
  <div>
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image :src="'http://192.168.3.81:8080/imgs/'+item+'.jpg'" hight="100%"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="articelItems" v-for="item in dataList ">
      <articeItem
        :title="item.articletittle"
        :con="item.articlecon"
        :good="item.easyLike"
        talking="item.articlecon"
        :browse="item.browse"
        :id="item.id"
        :type="item.articletype"
        :createTime="item.createtime"
      />
    </div>
  </div>
</template>
<script>
import articeItem from "./../../components/homeArticeItem.vue";
import { articleList } from "./../../api/webapi/article";
export default {
  data() {
    return {
      dataList: []
    };
  },
  components: {
    articeItem
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      var obj = {
        status: 0,
        recyclebin: 0
      };
      var result = await articleList(obj);
      this.dataList = result.data;
    }
  }
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
