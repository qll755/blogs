<template>
  <div class="article">
    <h3 class="articleTitle" @click="jumpPage()">{{title}}</h3>
    <div class="typeTime">
      <i class="el-icon-paperclip icon"/>
      {{type}}
      <i class="el-icon-date icon"/>
      {{createTime}}
    </div>
    <div class="articleCon" v-html="con"></div>
    <div class="userAction">
      <div class="good">
        <i class="el-icon-star-on"></i>
        {{good}}
      </div>
      <div class="talking">
        <i class="el-icon-chat-dot-round"></i>
        {{talking}}
      </div>
      <div class="browse">
        <i class="el-icon-view"></i>
        {{browse}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "title",
    "con",
    "good",
    "talking",
    "browse",
    "type",
    "createTime",
    "id"
  ],
  methods: {
    jumpPage() {
      this.$router.push("/home/article/" + this.id);
    }
  }
};
</script>
<style>
.articleTitle {
  padding-left: 10px;
  transition: 0.5s;
  display: inline-block;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.articleTitle:hover {
  color: rgb(219, 168, 0);
  padding-left: 20px;
  cursor: pointer;
}
.articleCon {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 43px;
}
.userAction {
  overflow: hidden;
}
.userAction div {
  display: inline-block;
  float: right;
  margin-right: 10px;
}
.icon {
  margin-left: 10px;
}
.article {
  margin-bottom: 20px;
  border-radius: 10px;
}
.article:hover {
  box-shadow: darkgrey 0px 0px 30px 5px;
}
</style>

