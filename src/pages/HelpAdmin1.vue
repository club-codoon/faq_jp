<template>
  <page>
    <template slot="content">
      <help-content :title="'歩数計測型イベントにおける異常データの回避'">
        <template slot="content">
          <div class="text">
            イベントを作成/編集する時に、参加者の一日の歩数上限値を設定できます。上限を超えるデータはイベントにカウントされません。合理的な値を設定することによって、異常データ(不正データ)を回避することができます。
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
