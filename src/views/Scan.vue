<template>
  <div class="scan">
    <qrcode-stream @decode="onDecode" @init="onInit" />
    <div class="loading" v-if="loading">
      <cube-loading :size="40" v-if="!error"></cube-loading>
      <span class="text">{{ error ? error : "摄像头加载中" }}</span>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "Scan",
  components: {
    QrcodeStream,
  },
  data() {
    return {
      error: "",
      loading: true,
    };
  },
  methods: {
    onDecode(result) {
      // this.result = result;
      this.$router.replace({ name: "ScanResult" });
    },

    async onInit(promise) {
      try {
        await promise;
        this.loading = false;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scan {
  height: 100%;
  .loading {
    position: absolute;
    z-index: 100;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 0.5rem;
      margin-top: 0.5rem;
    }
  }
}
</style>
