<template>
  <page>
    <template slot="content">
      <help-content :title="'ネットがなくても歩数計測できますか？'">
        <template slot="content">
          <div class="text">
            ネットワークがなくても歩数計測できます。WeRUNはバックグラウンドで実行し、計測した歩数を携帯に保存しています。ネットワークに接続した場合、マイページを下スワイプすれば歩数データを手動で同期できます。
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
