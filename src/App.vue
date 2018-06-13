<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "../node_modules/normalize.css/normalize.css";
  @import "../node_modules/hotcss/src/px2rem.scss";
  @import "./assets/style/settings.scss";
  @import "./assets/style/flex.scss";

  html {
    font-size: 16px;
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $color-bg;
  }

  body {
    @import "./assets/style/settings.scss";
    background: #fff;
  }

  @media screen and (min-device-width: 720px) {
    html {
      background: #f9f9f9;
    }
    body {
      max-width: 720px;
      margin: 0 auto;
      min-height: 1000px;
      border-left: 1px solid #e4e4e4;
      border-right: 1px solid #e4e4e4;
    }
  }
</style>
