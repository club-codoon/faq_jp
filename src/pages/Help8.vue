<template>
  <page>
    <template slot="content">
    <help-content :title="'Androidデータの激増と振ってもデータがない場合の対処法'">
      <template slot="content">
        <div class="text">
          この問題は携帯のハードウェアに異常がある可能性があります。それによりWeRUNが正常なデータを取得できないか、WeRUNが異常なデータを取得します。携帯を再起動することによって問題が解決したかどうかを確認できます。これが何度も発生する場合、携帯のハードウエアの故障であると判断できます。この場合Weバンドを購入して歩数を計測することを推奨します。
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
