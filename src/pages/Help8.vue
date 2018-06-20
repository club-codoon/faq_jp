<template>
  <page>
    <template slot="content">
    <help-content :title="'Android携帯において計測データの激増または振ってもデータが取れない理由は？'">
      <template slot="content">
        <div class="text">
          携帯のハードウェアに異常がある可能性があります。それによりWeRUNが正常なデータを取得できないか、異常なデータを取得してしまいます。携帯を再起動することによって問題が解決する場合があります。問題が繰り返し発生する場合、ハードウエアの故障であると判断できます。この場合はWeバンドを購入して歩数を計測することを推奨します。
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
