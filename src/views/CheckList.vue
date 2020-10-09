<template>
  <div class="checkList">
    <MyHeader title="资产盘点" :back="true" />

    <div class="menus">
      <div class="menu menu-active">进行中</div>
      <div class="menu">已完成</div>
      <div class="menu">已终止</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckList",
  components: {
    MyHeader: () => import("../components/MyHeader"),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.checkList {
  .menus {
    background-color: #4c6ef4;
    display: flex;
    justify-content: space-around;
    font-size: 0.4rem;
    .menu {
      border-bottom: 2px solid transparent;
      padding-bottom: 0.1rem;
      &-active {
        border-bottom-color: #f69b03;
      }
    }
  }
}
</style>
