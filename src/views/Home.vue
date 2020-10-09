<template>
  <div class="home">
    <div class="top">
      <div class="t1">
        <cube-input class="search" v-model="searchKey" :clearable="true" placeholder="查找资产、人员信息">
          <!-- <span slot="prepend">123</span> -->
          <i class="fa fa-search" slot="prepend" aria-hidden="true"></i>
        </cube-input>
        <img class="sm" :src="icons.sm" @click="toScan" alt />
      </div>
      <div class="t2">
        <p>名下资产：</p>
        <p>
          <span>10</span>台/件
          <span class="split">|</span>
          价值
          <span>7.85</span>万元
        </p>
      </div>
    </div>

    <div class="card card1">
      <img :src="icons.audit" alt />
      <div class="tj">
        <span class="number">0</span>
        <span>待审批业务</span>
      </div>
      <img :src="icons.check" alt />
      <div class="tj">
        <span class="number">10</span>
        <span>待盘点业务</span>
      </div>
    </div>

    <div class="card card2">
      <div class="col" v-for="i in 4">
        <img :src="icons.audit" alt />
        <span>功能{{ i }}</span>
      </div>
    </div>
    <div class="card card3">
      <div class="title">
        通知公告
        <span>更多></span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sm from "../assets/icon/sm.png";
import check from "../assets/icon/check.png";
import audit from "../assets/icon/audit.png";
export default {
  name: "Home",
  data() {
    return {
      icons: { sm, audit, check },
      searchKey: ""
    };
  },
  methods: {
    toScan() {
      this.$router.push({ name: "Scan" });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .top {
    background-color: #4c6ef4;
    padding: 0.5rem 0.5rem 0.2rem;
    color: white;
    .t1 {
      display: flex;
      align-items: center;
      margin-bottom: 0.4rem;
      .search {
        flex: 1 0 0;
        width: 0;
        margin-right: 0.2rem;
        i {
          margin-left: 0.2rem;
        }
      }
      .cube-input {
        background-color: #4667da;
        &::after {
          border: none;
        }
      }
      .sm {
        height: 1rem;
        width: 1rem;
      }
    }
    .t2 {
      font-size: 0.4rem;
      line-height: 0.7rem;
      span {
        font-size: 0.6rem;
        &.split {
          margin: 0 0.2rem;
        }
      }
    }
  }
  .card {
    margin: 0px 0.3rem;
    border: 1px solid #eee;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.2rem;
    background-color: white;
  }
  .card1 {
    display: flex;
    margin-top: 0.2rem;
    font-size: 0.4rem;
    padding: 0.5rem;
    img {
      height: 1rem;
    }
    .tj {
      margin-left: 0.2rem;
      flex: 1 0 0;
      width: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .number {
        color: red;
        font-size: 0.7rem;
      }
    }
  }

  .card2 {
    margin-top: 0.2rem;
    font-size: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    .col {
      width: 33.3%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.2rem 0;
      img {
        height: 1rem;
      }
      span {
        margin-top: 0.1rem;
      }
    }
  }
  .card3 {
    margin-top: 0.2rem;
    font-size: 0.4rem;
    height: 100px;
    padding: 0.2rem;
    .title {
      font-size: 0.45rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem 0;
      border-bottom: 1px solid #eee;
      span {
        font-size: 0.4rem;
        color: #4c6ef4;
      }
    }
  }
}
</style>
