<template>
  <div class="myHeader">
    <i
      v-if="back === true"
      class="fa fa-angle-left"
      aria-hidden="true"
      @click="goBack"
    ></i>
    <div class="title">{{ title }}</div>
    <i
      v-if="back === true"
      class="fa fa-angle-left fa-none"
      aria-hidden="true"
    ></i>
  </div>
</template>

<script>
export default {
  props: ["title", "back"],
  name: "MyHeader",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.myHeader {
  background-color: #4c6ef4;
  height: 1.2rem;
  color: white;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  .title {
    flex: 1 0 0;
    text-align: center;
  }
  i {
    font-size: 0.8rem;
    &.fa-none {
      visibility: hidden;
    }
  }
}
</style>
