<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'日本語版では不要のため削除'">
        <template slot="content">
          <div class="text">菜单中可进行计步数据源的切换，目前有三个可选计步源，企业咕咚手环（购买手环之后点击可进行绑定手环），微信运动，手机计步</div>
          <img class="picture" src="../assets/images/q_and_a/6.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndASwitchDataSource',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
