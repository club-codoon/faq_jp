<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'アカウントの紐付け'">
        <template slot="content">
          <div class="text">トップページ左上隅のメニューの<b>設定</b>からアカウントの設定や変更が可能です。アカウント紐付け機能で複数のログイン方法を紐付け/解除することができます。</div>
          <img class="picture" src="../assets/images/q_and_a/4.png">
          <img class="picture" src="../assets/images/q_and_a/5.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndABindingAccount',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
