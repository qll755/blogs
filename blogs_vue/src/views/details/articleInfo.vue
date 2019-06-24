<template>
  <div>
    <div>{{dataList.articletittle}}</div>
    <div>{{dataList.articletype}}{{dataList.createtime}}{{dataList.user}}{{dataList.browse}}</div>
    <div class="con" v-html="dataList.articlecon"></div>
    <Talk/>
  </div>
</template>
<script>
import Talk from "./../details/talking.vue";
import { articleInfo } from "./../../api/webapi/article";
export default {
  components: { Talk },
  data() {
    return {
      dataList: {}
    };
  },
  created() {
    this.getArticleInfo();
  },
  methods: {
    async getArticleInfo() {
      var articleID = this.$route.params.articleId;
      var result = await articleInfo({ id: articleID });
      this.dataList = result.data[0];
    }
  }
};
</script>
<style>
.content {
  width: 70%;
}
.con img {
  width: 200%;
}
@media screen and (max-width: 640px) {
  .con img {
    width: 100%;
  }
}
</style>
