<template>
  <page>
    <template slot="content">
      <help-content :title="'一部の歩数が記録されない理由は？(Android)'">
        <template slot="content">
          <div class="text">画面ロック中でも歩数を記録できるかどうか、メニューの[設定]でセンサーをテストしてください。</div>
          <div class="text">一部の歩数データが記録されない場合、バックグラウンド実行中のWeRUNアプリは携帯システムや他のAPPによって強制終了させられている可能性があります。</div>
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
