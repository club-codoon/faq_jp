<template>
  <page>
    <template slot="content">
      <help-content :title="'バックグラウンドで実行中のWeRUNの強制終了を防ぐ方法(Android)'">
        <template slot="content">
          <div class="text">
            Android携帯の機種が多く、最も一般的な機種を想定してアプリを開発しています。ただし、携帯にクリーナーソフト等が入っている場合、[WeRUNメニュー] > [設定] > [より正確な計測方法]の通りに操作してもクリーニングされてしまう可能性があります。
            この通りに操作しても問題が解決できない場合は、ヘルプデスクまでご連絡ください。お問い合わせ先:<a href="mailto:help@werunclub.net">help@werunclub.net</a>。
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
