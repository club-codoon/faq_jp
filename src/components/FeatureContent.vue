<template>
  <div class="features-content">
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'FeaturesContent',
    components: {}
  }
</script>

<style lang="scss">
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .features-content {
    font-size: px2rem(32px);
    padding: 0 px2rem(20px);
    color: $color-black-light;

    .text-group {
      padding-top: px2rem(40px);
    }
    .title {
      margin: px2rem(0px) auto;
      width: px2rem(500px);
      height: px2rem(70px);
      line-height: px2rem(70px);
      -webkit-border-radius: px2rem(40px);
      -moz-border-radius: px2rem(40px);
      border-radius: px2rem(40px);
      background: $color-bg;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 px2rem(10px);
      text-align: center;
      color: $color-blue;
      margin-bottom: px2rem(40px);
    }
    .text {
      padding-bottom: px2rem(40px);
      line-height: 180%;
    }
    .img {
      width: 100%;
      max-width: 100%;
      padding-bottom: px2rem(40px);
    }
  }
</style>
