<template>
  <page>
    <template slot="content">
      <help-content :title="'過去の計測データの確認方法は？'">
        <template slot="content">
          <div class="text">
            歩数の履歴データはマイページの「歩数」をタップして、折れ線グラフを左右に動かすことで確認することができます。
          </div>
          <div class="text">
            ランニングの履歴データはマイページの「ウォーク/ラン」>「運動履歴」から確認することができます。
          </div>
        </template>
      </help-content>
    </template>
  </page>
</template>

<script>
  import HelpContent from '@/components/HelpContent'
  import Page from '@/components/Page'

  export default {
    components: {
      HelpContent,
      Page
    }
  }
</script>

<style lang="scss" scoped>
</style>
