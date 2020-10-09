<template>
  <div class="main">
    <div class="content">
      <router-view />
    </div>
    <div class="tabs">
      <router-link tag="div" to="/main/home" class="tab">
        <i class="fa fa-home fa-2x" aria-hidden="true"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="div" to="/main/check" class="tab">
        <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
        <span>盘点</span>
      </router-link>
      <router-link tag="div" to="/main/audit" class="tab">
        <i class="fa fa-check-circle fa-2x" aria-hidden="true"></i>
        <span>审批</span>
      </router-link>
      <router-link tag="div" to="/main/me" class="tab">
        <i class="fa fa-user fa-2x" aria-hidden="true"></i>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1 0 0;
    height: 0;
    overflow-y: auto;
    background-color: #f5f9fc;
  }
  .tabs {
    height: 1.5rem;
    font-size: 0.4rem;
    display: flex;

    .tab {
      flex: 1 0 0;
      width: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #888;
      &.router-link-active {
        color: #4c6ef4;
      }
      span {
        margin-top: 2px;
      }
    }
  }
}
</style>
