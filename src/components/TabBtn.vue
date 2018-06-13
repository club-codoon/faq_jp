<template>
  <div class="tab-btn" :class="{'tab-btn-active': isActive}" @click="clickTab">
    {{ title }}
  </div>
</template>

<script>
  export default {
    props: {
      title: {
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
      },
      defaultActive: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    data: function () {
      return {
        crtActiveTabName: ''
      }
    },
    computed: {
      isActive: function () {
        if (this.name === this.crtActiveTabName) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      clickTab: function () {
        this.$parent.$emit('tab-switch', [this.name])
      }
    },
    created: function () {
      this.$parent.$on('tab-switch', (args) => {
        let tabName = args[0]
        this.crtActiveTabName = tabName
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
