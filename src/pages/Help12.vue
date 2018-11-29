<template>
  <page>
    <template slot="content">
      <help-content :title="'ランキングの毎週、毎月とは、期間が決まっていますか？'">
        <template slot="content">
          <div class="text">
            ランキングは暦週と暦月で計算されています。
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
