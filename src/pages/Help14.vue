<template>
  <page>
    <template slot="content">
      <help-content :title="'マイページとランキングでデータが異なるのは？'">
        <template slot="content">
          <div class="text">
            WeRUNのランキングとイベントのデータはネットワークを通じてマイページのローカル歩数データをサーバーにアップロードし、バックエンドで計算した後ランキングとイベントページに反映されます。そのためマイページの歩数データと、ランキング・イベントのデータには数分の遅れがあります。
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
