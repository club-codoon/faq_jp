<template>
  <div class="tab">
    <div class="btns">
      <slot name="btns"></slot>
    </div>
    <div class="tabs">
      <slot name="tabs"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      defaultActiveTabName: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
    data: function () {
      return {
      }
    },
    methods: {
    },
    created: function () {
      setTimeout(() => {
        // 激活默认的 Tab
        if (this.defaultActiveTabName !== '') {
          this.$emit('tab-switch', [this.defaultActiveTabName])
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .tab {
  }
  .btns {
    height: px2rem(100px);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    @extend %flexbox;
    font-size: px2rem(32px);
    padding: px2rem(22px) 0;
    @include align-items(center);
    border-bottom: px2rem(1px) solid $color-gray-light;
  }
  .tab-btn {
    @include flex(1);
    color: $color-gray;
    text-align: center;
    border-right: px2rem(1px) solid $color-gray-light;
    &:last-child {
      border: 0;
    }
  }
  .tab-btn-active {
    color: $color-blue;
  }
</style>
