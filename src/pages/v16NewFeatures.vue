<template>
  <page>
    <template slot="content">
      <feature-content>
        <template slot="content">

          <div class="text-group">
            <div class="title">Weバンド3Sの操作紹介を追加</div>
            <div class="text">&nbsp;&nbsp;
              スマートバンドとペアリング後の、スマートバンドの操作紹介を追加しました。[スキップ]をタップすると、バンドのトップページを表示することができます。
            </div>
            <img src="../assets/images/v16_new_features/1.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">新しいスマートバンド設定機能を追加</div>
            <div class="text">
              1. メッセージ通知でLINEやFacebook、SNSの受信を個別設定できます<br/>
              2. 最大5つのアラームを設定できます。<br/>
              3. お休みモードを追加しました。
            </div>
            <img src="../assets/images/v16_new_features/2.png" class="img">
            <!--<img src="../assets/images/v16_new_features/3.png" class="img">-->
          </div>

          <div class="text-group">
            <div class="title">ポイントが獲得やすくなりました</div>
            <div class="text">
              1. Weバンド会員は日替ミッションを完了すると、追加ポイントをゲットできます。<br/>
              2. 隠しミッションを追加しました。ミッションを完了すると、追加ポイントをゲットできます。<br/>
              3. 完了したミッションをシェアすると、最高1000マイルのボーナスをゲットできます。
            </div>
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
            'pageTitle': '1.6 version新機能'
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
