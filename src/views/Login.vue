<template>
  <div class="login">
    <img class="logo" :src="logo" alt />

    <div class="item">
      <i class="fa fa-user" aria-hidden="true"></i>
      <cube-input v-model="param.username" placeholder="请输入用户名"></cube-input>
    </div>

    <div class="item">
      <i class="fa fa-key" aria-hidden="true"></i>
      <cube-input type="password" v-model="param.password" :eye="eye" placeholder="请输入密码"></cube-input>
    </div>
    <cube-button type="submit" :primary="true" @click="login">登陆</cube-button>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "Login",
  data() {
    return {
      logo,
      param: {
        username: "",
        password: ""
      },
      eye: {
        open: false,
        reverse: false
      }
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .logo {
    width: 5rem;
    margin: 0 auto 1rem;
  }
  .item {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    i {
      width: 1rem;
      font-size: 0.8rem;
    }
    .cube-input {
      flex: 1 0 0;
      width: 0;
    }
  }
}
</style>
