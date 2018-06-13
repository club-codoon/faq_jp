<template>
  <page>
    <template slot="content">
      <help-content :title="'イベントのアーカイブ確認方法'">
        <template slot="content">
          <div class="text">
            <b>パソコンのログイン管理ページ</b>をご利用ください: https://www.werunclub.net 「イベント」でグループ内の進行中のイベント、間もなく開始のイベント、完了したイベントすべてを確認することができます。
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
