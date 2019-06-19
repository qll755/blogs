<template>
  <div>
    <h3 class="articleTitle">{{title}}</h3>
    <div class="typeTime">
      {{type}}
      {{createTime}}
    </div>
    <div class="articleCon">{{con}}</div>
    <div class="userAction">
      <div class="good">{{good}}</div>
      <div class="talking">{{talking}}</div>
      <div class="browse">{{browse}}</div>
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
  ]
};
</script>
<style>
.articleTitle {
  padding-left: 10px;
  transition: 0.5s;
  display: inline-block;
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
}
</style>

