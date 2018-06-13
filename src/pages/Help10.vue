<template>
  <page>
    <template slot="content">
      <help-content :title="'iPhoneの歩数と「ヘルスケア」データに差がある理由は？'">
        <template slot="content">
          <div class="text">当日ログインアカウントを切り替えたか、別の携帯でログインした、またはタイムゾーンが東京の時間ではない場合、iPhoneから取得したWeRUNの歩数と「ヘルスケア」データの歩数との間に大きな差が出る原因となります。</div>
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
