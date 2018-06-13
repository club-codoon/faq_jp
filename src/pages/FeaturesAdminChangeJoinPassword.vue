<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'参加パスワードの変更方法'">
        <template slot="content">
          <div class="text"><b>グループ管理</b>画面の<b>参加管理</b>をタップして、参加パスワードの変更や参加者の設定を行うことができます。</div>
          <img class="picture" src="../assets/images/features_admin/4.png">
          <img class="picture" src="../assets/images/features_admin/5.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
