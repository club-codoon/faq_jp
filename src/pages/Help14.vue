<template>
  <page>
    <template slot="content">
      <help-content :title="'マイページとランキングでの歩数が異なるのは？'">
        <template slot="content">
          <div class="text">
            マイページの歩数データをサーバーにアップロードし、計算された結果がランキングとイベント画面に反映されます。そのためマイページの歩数データと、ランキング・イベント画面のデータでは数分の遅れがあります。
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
