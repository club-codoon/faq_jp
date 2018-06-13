<template>
  <page>
    <template slot="content">
      <help-content :title="'どの携帯でもWeRUNで歩数計を使用できますか?'">
        <template slot="content">
          <div class="text">WeRUN APPはiPhone 5s以下と一部のAndroidはサポートしておりません。</div>
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
