<template>
  <page>
    <template slot="content">
      <help-content :title="'個人データ履歴の確認方法は？'">
        <template slot="content">
          <div class="text">
            歩数履歴データはマイページの「歩数」をタップして、折れ線グラフを左右に動かすことで確認することができます。
          </div>
          <div class="text">
            ランニング履歴データはマイページの「ウォーク/ラン」→「運動履歴」から確認することができます。
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
