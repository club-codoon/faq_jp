<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'イベントデータのエクスポート'">
        <template slot="content">
          <div class="text">
            イベントデータのエクスポートは、<b>パソコンの管理者ページ</b>を利用してください：https://www.werunclub.net 管理者ページの<b>右上隅</b>から管理者アカウントでログインしてください。
            <b>イベント</b>画面で、エクスポートするイベントデータを選択してください。<b>イベント情報</b>画面で、イベントランキングをクリックすると、イベントデータをエクスポートすることができます。（終了したイベントのみエクスポート可能）
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
