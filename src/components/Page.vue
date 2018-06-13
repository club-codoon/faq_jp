<template>
  <div class="page" ref="el">
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'page',
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .page {
    background: #fff;
    padding-bottom: px2rem(100px);
    min-height: px2rem(568*2px);
    -webkit-overflow-scrolling: touch;
  }
</style>
