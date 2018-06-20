<template>
  <page>
    <template slot="content">
      <help-content :title="'イベントをアーカイブしてからの確認方法'">
        <template slot="content">
          <div class="text">
            パソコンで<b>管理ページ</b>: https://www.werunclub.netにログインしてご利用ください。 「イベント」で開催中のイベント、間もなく開始するイベント、終了したイベントすべてを確認することができます。
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
