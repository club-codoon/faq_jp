<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'イベントデータのエクスポート'">
        <template slot="content">
          <div class="text">
            イベントデータのエクスポートは<b>パソコンで</b>管理者ページ：https://www.werunclub.netを利用してください。管理者ページにて<b>管理者アカウント</b>でログインしてください。
            <b>イベント</b>画面で、対象イベントデータを選択し、<b>イベント情報</b>画面でランキング確認をクリックすると、イベントデータをエクスポートすることができます。（終了したイベントのみエクスポート可能）
          </div>
          <img class="picture" src="../assets/images/features_admin/13.png">
          <img class="picture" src="../assets/images/features_admin/14.png">
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
