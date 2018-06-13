<template>
  <page>
    <template slot="content">
      <help-content :title="'GPSイベントデータにマイページの距離データが反映されません'">
        <template slot="content">
          <div class="text">
            マイページの距離データは歩数データと歩幅によって換算した数値です。GPSイベントデータはマイページの「ウォーク/ラン」機能を使用する必要があり、「ウォーク」または「ラン」を完了した運動記録のみGPSイベントに反映することができます。
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
