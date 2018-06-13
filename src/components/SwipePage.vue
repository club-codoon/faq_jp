<template>
  <div class="swipe-page" :style="{'min-height': height}">
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'swipe-page',
    props: {
      height: {
        type: String,
        default: function () {
          return 'auto'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .swipe-page {
    // overflow: hidden;
  }
</style>
