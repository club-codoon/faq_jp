<template>
  <page>
    <template slot="content">
      <feature-content>
        <template slot="content">
          <div class="text-group">
            <div class="title">マイル交換</div>
            <div class="text">
              便利なマイル交換
            </div>
            <img src="../assets/images/v15_new_features/1.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">バンド心拍数（Weバンド3Sのみサポート）</div>
            <div class="text">
              Weバンド3Sを購入されたお客様は、Weバンド3Sの心拍数記録レポートを確認することができます
            </div>
            <img src="../assets/images/v15_new_features/2.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">バンド睡眠(Weバンド3Sのみサポート)</div>
            <div class="text">Weバンド3Sを購入されたお客様は、Weバンド3Sの睡眠計測を有効にすれば、睡眠記録レポートを確認することができます</div>
            <img src="../assets/images/v15_new_features/3.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">Weバンドの会員表記</div>
            <div class="text">Weバンド会員のバンド表記が表示されます</div>
            <img src="../assets/images/v15_new_features/4.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">ウォーク/ランの切替え</div>
            <div class="text">「ウォーク/ラン」のモード表示で異なる運動方法を選択でき、さらによりはっきりと表示されます</div>
            <img src="../assets/images/v15_new_features/5.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">健康状況‐体脂肪率</div>
            <div class="text">体脂肪率の表示を追加します。</div>
            <img src="../assets/images/v15_new_features/6.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">フィードバック機能</div>
            <div class="text">ヘルプでフィードバック機能を追加します。</div>
            <img src="../assets/images/v15_new_features/7.png" class="img">
          </div>

          <div class="text-group">
            <div class="title">保険</div>
            <div class="text">保険を追加します。継続的な運動をすることで、無料の保険をゲットできます。</div>
            <img src="../assets/images/v15_new_features/8.png" class="img">
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
            'pageTitle': '1.5 version新機能'
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
