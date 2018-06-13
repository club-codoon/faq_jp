<template>
  <page>
    <template slot="content">
      <feature-content>
        <template slot="content">
          <div class="text-group">
            <div class="title">保険について</div>
            <div class="text">
              マイページに「保険」機能を追加しました。毎日一定の歩数目標を達成することで無料の保険をゲットできます。
            </div>
            <img src="../assets/images/v14_new_features/1.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">1万歩目標達成レースで単一部門の選択が可能になりました。</div>
            <img src="../assets/images/v14_new_features/2.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">メニュー機能の調整</div>
            <div class="text">メニューをシンプルにしました。「グループ参加」と「グループ開設」機能を見やすく、[MYグループ]ページに[グループ切替]機能を入れました。</div>
            <img src="../assets/images/v14_new_features/3.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">WeRUNヘルプ</div>
            <div class="text">「WeRUNについて」機能に「ヘルプ」を追加しました。管理者とメンバーは使用中に疑問があった場合、「ヘルプ」で素早く検索して自己解決できます。</div>
            <img src="../assets/images/v14_new_features/4.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">バーチャルルートの最適化</div>
            <div class="text">バーチャルルートでイベント開催の状態（開催中、終了、間もなく開催）が表示できるようになりました。</div>
            <img src="../assets/images/v14_new_features/5.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">歩数計データソースにWeRUNアプリを追加しました</div>
            <div class="text">歩数計データソースの選択肢としてWeRUNアプリを追加しました。</div>
            <img src="../assets/images/v14_new_features/6.png" class="img">
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
            'pageTitle': '1.4 version新機能'
          })
        } catch (e) {
          console.error(e)
        }
      }, 100)
    }
  }
</script>

<style lang="scss">
</style>
