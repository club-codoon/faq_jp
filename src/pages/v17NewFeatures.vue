<template>
  <page>
    <template slot="content">
      <feature-content>
        <template slot="content">

          <div class="text-group">
            <div class="title">バンド専用イベント-時間指定歩数計測</div>
            <div class="text">管理者は一日の中で特定の時間を決めて、歩数計測イベントを開催することができます。</div>
            <img src="../assets/images/v17_new_features/1@2x.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">イベント紹介ページを追加しました</div>
            <div class="text">管理者がイベントを開設した際に、まず先にイベント統計、イベントランキング方法などの情報を確認することができます。</div>
            <img src="../assets/images/v17_new_features/2@2x.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">アプリで活動データをエクスポート可能に</div>
            <div class="text">イベント終了後、管理者が該当の終了イベントをクリックし、【データエクスポート】を選択すると、イベントデータを管理者ページから直接エクスポートすることができます</div>
            <img src="../assets/images/v17_new_features/3@2x.png" class="img spec-img">
          </div>

        </template>
      </feature-content>
    </template>
  </page>
</template>

<script>
  import FeatureContent from '@/components/FeatureContent'
  import Page from '@/components/Page'

  export default {
    components: {
      FeatureContent,
      Page
    },
    created: function () {
      setTimeout(function () {
        try {
          window.jc.setPageTitle({
            'pageTitle': '1.7 version新機能'
          })
        } catch (e) {
          console.error(e)
        }
      }, 100)
    }
  }
</script>

<style lang="scss" scoped>
  .spec-img {
    width: 90% !important;
    margin: 0 auto;
    display: block;
  }
</style>
