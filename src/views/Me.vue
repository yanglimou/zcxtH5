<template>
  <div class="me">
    <div class="top">
      <img :src="icons.me" alt />
      <div class="text">
        <p>
          <span>张阳</span> | 6112102
        </p>
        <p>廊坊校区/后勤管理处/</p>
      </div>
    </div>

    <div class="listCard">
      <img :src="icons.changePhone" alt />
      <span>修改绑定手机号</span>
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>

    <div class="listCard" @click="logout">
      <img :src="icons.logout" alt />
      <span>退出登陆</span>
    </div>
  </div>
</template>

<script>
import me from "../assets/icon/me.png";
import changePhone from "../assets/icon/changePhone.png";
import logout from "../assets/icon/logout.png";
export default {
  name: "Me",
  data() {
    return {
      icons: { me, logout, changePhone }
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.me {
  .top {
    background-color: #4c6ef4;
    padding: 0.8rem 0.5rem 0.2rem;
    color: white;
    display: flex;
    font-size: 0.4rem;
    img {
      height: 1.5rem;
      border-radius: 50%;
      border: 5px solid #ccc;
      background-color: white;
      margin-right: 0.3rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
        font-size: 0.6rem;
      }
    }
  }

  .listCard {
    font-size: 0.4rem;
    background-color: white;
    margin-top: 0.2rem;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    padding: 0.2rem 0.5rem;
    display: flex;
    align-items: center;
    img {
      height: 0.9rem;
      margin-right: 0.2rem;
    }
    span {
      flex: 1 0 0;
      width: 0;
    }
    i {
      color: #ddd;
    }
  }
}
</style>
