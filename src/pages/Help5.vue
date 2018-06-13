<template>
  <page>
    <template slot="content">
      <help-content :title="'WeRUNの運動データと他のAPPのデータが異なる理由は？'">
        <template slot="content">
          <div class="text">各APPのデータソースとアルゴリズムは異なります。WeRUNは他のAPPのデータではなく、携帯の歩数計のハードウェアデータを読み込みます。</div>
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
