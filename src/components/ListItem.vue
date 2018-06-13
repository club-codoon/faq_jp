<template>
  <div class="list-item" v-bind:class="{clickable: clickable}" @click="onClick">
    <div class="text">{{ text }}</div>
    <img class="arr" src="static/image/arrow_in@2x.png" v-if="showArr"/>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      text: {
        type: String,
        default: function () {
          return ''
        }
      },
      // 显示箭头
      showArr: {
        type: Boolean,
        default: function () {
          return true
        }
      },
      clickable: {
        type: Boolean,
        default: function () {
          return true
        }
      },
      urlName: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
    methods: {
      onClick: function () {
        if (this.url !== '') {
          setTimeout(() => {
            this.$router.push({name: this.urlName})
          }, 300)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .list-item {
    min-height: px2rem(88px - 28px - 28px);
    padding: px2rem(19px) px2rem(40px);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid $color-gray-light;

    @extend %flexbox;
    @include align-items(center);
  }
  .clickable {
    &:active {
      background: #f1f1f1;
    }
  }
  .text {
    color: $color-black-light;
    font-size: px2rem(30px);
    padding-right: px2rem(40px);
    line-height: 160%;
    @include flex(1);
  }
  .arr {
    height: px2rem(20px);
  }
</style>
