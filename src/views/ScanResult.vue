<template>
  <div class="scanResult">
    <!-- <MyHeader title="扫描结果" :back="true" /> -->

    <div class="card">
      <div class="title">
        <span class="content">JJ0200544324</span>
        <span class="circle circle-yellow"></span>
        <span class="color-yellow">未盘点</span>
      </div>
      <div class="name">课桌椅</div>
      <div class="price">
        <span>¥698.00</span>(1台件)
      </div>
      <table>
        <tr>
          <td>品牌：</td>
          <td>*</td>
        </tr>
        <tr>
          <td>规格型号：</td>
          <td>*</td>
        </tr>
        <tr>
          <td>使用人：</td>
          <td>吴凡(6000246)</td>
        </tr>
        <tr>
          <td>取得日期：</td>
          <td>2006-12-12</td>
        </tr>
      </table>
    </div>
    <div class="confirm">
      <cube-button :primary="true" @click="confirm">确认继续盘点</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScanResult",
  components: {
    MyHeader: () => import("../components/MyHeader")
  },
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.scanResult {
  .card {
    margin: 0.2rem 0.3rem 0;
    border: 1px solid #eee;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    background-color: white;
    font-size: 0.4rem;
    padding: 0.3rem;
    color: #666;
    .title {
      display: flex;
      align-items: center;
      .content {
        flex: 1 0 0;
        width: 0;
      }
      .circle {
        height: 0.3rem;
        width: 0.3rem;
        border-radius: 50%;
        &-yellow {
          background-color: #fd9604;
        }
      }
      .color-yellow {
        color: #fd9604;
        margin-left: 0.1rem;
      }
    }
    .name {
      text-align: center;
      font-size: 0.6rem;
      margin: 0.5rem;
    }
    .price {
      text-align: center;
      margin-bottom: 0.5rem;
      span {
        font-size: 0.6rem;
        color: #f46f58;
      }
    }
    table {
      tr {
        td:first-child {
          text-align: right;
        }
        td {
          padding: 0.1rem;
        }
      }
    }
  }

  .confirm {
    margin: 0.5rem 0.3rem 0;
  }
}
</style>
