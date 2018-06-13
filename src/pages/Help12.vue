<template>
  <page>
    <template slot="content">
      <help-content :title="'毎週・毎月のランク付けは暦週と暦月ですか？'">
        <template slot="content">
          <div class="text">
            ランク付けは暦週と暦月によって計算します。
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
