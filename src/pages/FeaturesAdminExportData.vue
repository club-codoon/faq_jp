<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'歩数データの一括エクスポート'">
        <template slot="content">
          <div class="text">
            毎日の歩数データのエクスポートは、<b>パソコンの管理者ページ</b>を利用してください：https://www.werunclub.net 管理者ページの<b>右上隅</b>から管理者アカウントでログインしてください。
            <b>統計</b>の<b>全てのランキングを見る</b>を選択し、<b>データをエクスポート</b>をクリックし、エクスポートタスクを作成するために必要な期間を選択してください。
            エクスポートした歩数データは、<b>エクスポート</b>画面に表示されます。エクスポート完了後、<b>エクスポート結果</b>からダウンロードできます。
          </div>
          <img class="picture" src="../assets/images/features_admin/15.png">
          <img class="picture" src="../assets/images/features_admin/16.png">
          <img class="picture" src="../assets/images/features_admin/17.png">
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
