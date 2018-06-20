<template>
  <page>
    <template slot="content">
      <help-content :title="'アプリの歩数はiPhoneの「ヘルスケア」と差がある理由は？'">
        <template slot="content">
          <div class="text">当日ログインアカウントを切り替えたり、異なる携帯でログインしたり、または携帯の時間帯を東京以外に設定したりしたことが、WeRUNの歩数と「ヘルスケア」データの間に大きな差が出る原因となります。</div>
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
