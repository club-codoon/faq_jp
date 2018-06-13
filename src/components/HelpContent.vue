<template>
  <div class="help-content">
    <list-group>
      <list-item :text="title" :showArr="false" :clickable="false"></list-item>
    </list-group>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  import ListGroup from '@/components/ListGroup'
  import ListItem from '@/components/ListItem'

  export default {
    name: 'HelpConent',
    components: {
      ListGroup,
      ListItem
    },
    props: {
      title: {
        type: String,
        default: function () {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .help-content {
  }
  .content {
    padding: px2rem(36px) px2rem(40px);
    font-size: px2rem(30px);
    color: $color-black-light;
  }
  .picture {
    max-width: 100%;
    width: 100%;
    padding: px2rem(26px) 0;
  }
  .p {
    margin-bottom: px2rem(20px);
  }
  .text {
    padding: px2rem(10px) 0;
    line-height: 140%;
    /*word-break: break-all;*/
    word-wrap: break-word;
  }
  .title {
    font-weight: bold;
  }
</style>
