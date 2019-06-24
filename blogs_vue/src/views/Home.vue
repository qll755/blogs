<template>
  <div class="warp">
    <Header/>
    <div class="content">
      <router-view class="router"></router-view>
      <navRight class="nar"/>
    </div>
  </div>
</template>
<script>
import Header from "./../components/homeHeader.vue";
import navRight from "./../components/homeRight.vue";
export default {
  components: {
    Header,
    navRight
  },
  created() {
    this.$router.push("/home/index");
  }
};
</script>
<style >
.warp {
  width: 100%;
  height: auto;
  padding-top: 51px;
}
.content {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 1.7%;
  height: 92vh;
}
.router {
  height: auto;
  width: 65%;
}
.nar {
  width: 30%;
}
@media screen and (max-width: 640px) {
  .warp {
    margin: 0 auto;
    width: 97%;
    padding: 0;
  }
  .router,
  .nar {
    width: 100%;
  }
  .content {
    width: 100%;
    flex-wrap: wrap;
  }
}
</style>
