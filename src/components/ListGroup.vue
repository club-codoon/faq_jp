<template>
  <div class="list-group">
    <div class="title" v-if="title !== ''" @click="clickTitle">{{ title }}</div>

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ListGroup',
    props: {
      title: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
    methods: {
      // 未设置点击时间会转移到上下的 item 。。奇怪
      clickTitle: function (e) {
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .list-group {
    .title {
      padding: px2rem(30px) px2rem(40px);
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-bottom: 1px solid $color-gray-light;
      font-size: px2rem(32px);
      color: $color-gray-heavy;
      background: $color-bg;

      @extend %flexbox;
      @include align-items(center);
    }
  }
</style>
