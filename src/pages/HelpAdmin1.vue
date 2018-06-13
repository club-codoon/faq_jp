<template>
  <page>
    <template slot="content">
      <help-content :title="'歩数系イベントの異常データ回避方法'">
        <template slot="content">
          <div class="text">
            イベント作成/編集で、一日の参加者の歩数上限を設定できます。上限を超えるデータはイベントに反映されません。合理的な設定を行えば、大きな異常データ(不正データ)を回避することができます。
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
