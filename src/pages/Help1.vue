<template>
  <page>
    <template slot="content">
      <help-content :title="'どの携帯でもWeRUNアプリで歩数を計測できますか?'">
        <template slot="content">
          <div class="text">WeRUNアプリはiPhone 5s以下及び、一部のAndroid携帯はサポートしておりません。</div>
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
