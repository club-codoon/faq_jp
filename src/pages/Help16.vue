<template>
  <page>
    <template slot="content">
      <help-content :title="'GPSイベントに「ウォーク/ラン」で計測したデータの一部のみ反映される理由は？'">
        <template slot="content">
          <div class="text">
            管理者はGPSウォーク/ランイベントのペース規則を設定しています。イベント開催期間内、「ウォーク/ラン」機能で記録したスコアのペースとペース規則が一致しないデータは、有効スコアとしてカウントされません。また、一回の運動で1㎞未満の記録もスコアとしてカウントされません。
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
