<template>
  <page>
    <template slot="content">
      <help-content :title="''GPSイベントにマイページの距離値が反映されない理由は？'">
        <template slot="content">
          <div class="text">
            マイページに表示されている距離は歩数と歩幅によって計算した値です。マイページの「ウォーク/ラン」機能を使用し、「ウォーク」または「ラン」を完了した運動記録のみGPSイベントの対象データとなります。
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
