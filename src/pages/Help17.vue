<template>
  <page>
    <template slot="content">
      <help-content :title="'日本語版では不要のため削除。'">
        <template slot="content">
          <div class="text">
            1. 选择微信运动数据源之前，请先确认此账号已绑定微信。<br><br>
            2. 每次打开企业咕咚的微信小程序，会自动将最新的微信数据同步到企业咕咚，之后可进入企业咕咚APP查看数据，如遇延迟请稍等一会。<br><br>
            3. 安卓用户可点击小程序右上角菜单，将企业咕咚小程序添加到桌面，使用更加便捷。
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
