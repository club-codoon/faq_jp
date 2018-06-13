<template>
  <page>
    <template slot="content">
      <help-content :title="'ネットがないと歩数計測できませんか？'">
        <template slot="content">
          <div class="text">
            ネットワークがなくても歩数計測できます。WeRUNはバックグラウンドで実行状態を維持して、記録した歩数を携帯に保存できます。ネットワークに接続した場合、下スワイプで歩数データを手動同期できます。
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
