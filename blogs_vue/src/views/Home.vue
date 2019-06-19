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
  height: 100%;
  padding-top: 3%;
}
.content {
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 2%;
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
    padding-top: 8%;
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
