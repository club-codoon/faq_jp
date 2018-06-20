<template>
  <page>
    <template slot="content">
      <help-content :title="'歩数データに関するご質問がある場合'">
        <template slot="content">
          <div class="text">
            androidの場合、疑問のある歩数ページの右上をタップすると、異常データを送信することができます。送信後ヘルプデスクにもご連絡ください。iPhoneの場合、直接ヘルプデスクまでご連絡ください。連絡先：<a href="mailto:help@werunclub.net">help@werunclub.net</a>
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
