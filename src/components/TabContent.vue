<template>
  <div class="tab-content" v-show="visible">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: function () {
          return ''
        }
      },
      name: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
    data: function () {
      return {
        visible: false
      }
    },
    methods: {
      onTabSwitch: function (args) {
        if (args.length !== 1) {
          console.error('onTabSwitch 不正なパラメータ')
          return
        }

        let tabName = args[0]
        if (tabName !== '') {
          if (tabName === this.name) {
            this.visible = true
          } else {
            this.visible = false
          }
        } else {
          console.warn('tabName は空です')
        }
      }
    },
    created: function () {
      this.$parent.$on('tab-switch', this.onTabSwitch)
    }
  }
</script>

<style lang="scss" scoped>
</style>
