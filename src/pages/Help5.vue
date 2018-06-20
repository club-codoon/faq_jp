<template>
  <page>
    <template slot="content">
      <help-content :title="'WeRUNの運動データと他のAPPのデータが異なる理由は？'">
        <template slot="content">
          <div class="text">アプリによってデータソースやアルゴリズムが異なります。WeRUNは他のアプリのデータではなく、直接携帯の計測センサーからデータを取得しています。</div>
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
