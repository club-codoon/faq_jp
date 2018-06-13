<template>
  <page>
    <template slot="content">
      <help-content :title="'一部の歩数データが記録されません(Android)'">
        <template slot="content">
          <div class="text">ロック画面でも歩数を記録できるかどうか、[設定]でセンサーをテストしてください。</div>
          <div class="text">一部の歩数データが記録されない場合、バックグラウンドでシステムや他のAPPによってWeRUNが強制終了されている可能性があります。この場合、歩数を記録できません。</div>
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
