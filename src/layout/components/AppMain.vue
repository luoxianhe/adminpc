<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 顶部导航 -->
      <MyBreadcrumb></MyBreadcrumb>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <div class="toalLeft">
          <router-view :key="key" />
      </div>
     
    </transition>
  </section>
</template>
<script>
import MyBreadcrumb from "@/components/MyBreadcrumb/MyBreadcrumb";
export default {
  name: "AppMain",
  components: {
    MyBreadcrumb
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  top: 50px;
  overflow: hidden;
}
.toalLeft{
  margin-left: 20px;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
