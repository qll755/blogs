<template>
  <div class="home-header">
    <div class="nav">
      <span>首页</span>
      <span>文章</span>
      <span>留言</span>
      <span>格言</span>
    </div>
  </div>
</template>
<script>
``;
export default {};
</script>
<style>
.home-header {
  background: gray;
  width: 100%;
  position: absolute;
  top: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}
.nav span {
  display: inline-block;
  padding: 30px 60px 0 60px;
  color: white;
}
.nav span:hover {
  color: cornflowerblue;
  background: rgb(84, 92, 100);
  cursor: pointer;
}
@media screen and (max-width: 640px) {
  .nav span {
    padding: 1%;
  }
  #app {
    min-width: 100%;
  }
  .nav {
    width: 100%;
  }
  .nav span:hover {
    color: yellow;
    background: gray;
  }
}
</style>
