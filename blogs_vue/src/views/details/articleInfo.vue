<template>
  <div>
    <div>{{dataList.articletittle}}</div>
    <div>
      标签：{{dataList.articletype}}
      写作时间：{{dataList.createtime}}
      作者：{{dataList.user.nickname}}
      浏览量：{{dataList.browse}}</div>
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
  width: 150%;
}
@media screen and (max-width: 640px) {
  .con img {
    width: 100%;
  }
}
</style>
