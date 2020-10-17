<template>
  <div class="check">
    <div class="top">
      <div class="menus">
        <div class="menu menu-active">进行中</div>
        <div class="menu">已完成</div>
        <div class="menu">已终止</div>
      </div>
    </div>

    <div class="card">
      <div class="title">国资处2020年资产盘点</div>

      <div class="tjs">
        <div class="tj">
          <span>10</span>
          <span>未盘</span>
          <span class="circle circle-yellow"></span>
        </div>
        <div class="tj">
          <span>10</span>
          <span>无盈亏</span>
          <span class="circle circle-green"></span>
        </div>
        <div class="tj">
          <span>10</span>
          <span>盘盈</span>
          <span class="circle circle-green"></span>
        </div>
        <div class="tj">
          <span>10</span>
          <span>盘亏</span>
          <span class="circle circle-red"></span>
        </div>
      </div>

      <div class="buttons">
        <cube-button :inline="true" :outline="true" :primary="true">手动盘点</cube-button>
        <cube-button :inline="true" :primary="true">扫码盘点</cube-button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Check",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.check {
  .top {
    background-color: #4c6ef4;
    padding: 0.5rem 0.5rem 0.1rem;
    color: white;
    font-size: 0.4rem;
    .menus {
      display: flex;
      justify-content: space-around;
      .menu {
        border-bottom: 2px solid transparent;
        padding-bottom: 0.1rem;
        &-active {
          border-bottom-color: #f69b03;
        }
      }
    }
  }

  .card {
    margin: 0.2rem 0.3rem 0;
    border: 1px solid #eee;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    background-color: white;
    font-size: 0.4rem;

    padding: 0.3rem;
    .title {
      margin-bottom: 0.2rem;
      font-size: 0.45rem;
      padding-bottom: 0.1rem;
      border-bottom: 1px solid #eee;
    }
    .tjs {
      display: flex;
      .tj {
        flex: 1 0 0;
        width: 0;
        padding: 0.2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        span:not(:first-child) {
          margin-top: 0.2rem;
        }
        &:not(:first-child) {
          border-left: 1px solid #eee;
        }
        .circle {
          height: 0.3rem;
          width: 0.3rem;
          border-radius: 50%;
          &-yellow {
            background-color: #fd9604;
          }
          &-green {
            background-color: #4998ff;
          }
          &-red {
            background-color: #ff6e5b;
          }
        }
      }
    }

    .buttons {
      margin-top: 0.2rem;
      text-align: right;
      button:not(:first-child) {
        margin-left: 0.2rem;
      }
    }
  }
}
</style>