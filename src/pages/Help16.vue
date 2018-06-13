<template>
  <page>
    <template slot="content">
      <help-content :title="'GPSイベントに「ウォーク/ラン」スコアが一部反映されません'">
        <template slot="content">
          <div class="text">
            管理者はGPSウォーク/ランイベントのペース規則を設定しています。イベント開催期間内で「ウォーク/ラン」機能のペースとペース規則が一致しない場合は運動記録がイベント内に反映されません。また、一回の運動で1㎞未満の記録はGPSイベントに反映されません。
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
