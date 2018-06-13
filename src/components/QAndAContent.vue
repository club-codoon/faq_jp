<template>
  <help-content :title="title">
    <template slot="content">
      <slot name="content"></slot>
    </template>
  </help-content>
</template>

<script>
  import HelpContent from '@/components/HelpContent'

  export default {
    name: 'QAndAContent',
    components: {
      HelpContent
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

  .q_and_a_content {
    font-size: px2rem(30px);
    color: $color-black-light;
    padding: px2rem(40px);
  }
  .text {
  }
  .picture {
    padding: px2rem(20px) 0;
  }
</style>
