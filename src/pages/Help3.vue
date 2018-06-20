<template>
  <page>
    <template slot="content">
      <help-content :title="'Android携帯の歩数データが0の場合の対処法'">
        <template slot="content">
          <div class="title">アクセス権限の設定</div>
          <div class="text p">
            WeRUNをインストールし、初めて起動する際に各種アクセス権限を許可するかどうかを聞かれた場合、すべて許可してください。許可しなかった、または許可の通知がなかった場合は歩数の計測機能がないか、画面ロックの場合は歩数を計測できない可能性があります。WeRUNの[メニュー] > [設定] > [より正確な歩数計測方法]にて権限を設定してください。
          </div>

          <div class="title">センサーをテスト</div>
          <div class="text p">WeRUNは携帯の各種センターからデータを取得しているため、センサーが正常に稼働していることを確認してください。WeRUNの[メニュー] > [設定] > [センサーをテスト]で画面ロックで歩数計測のテストを行うことができます。詳しくは画面の指示に従って操作してください。</div>

          <div class="title">WeRUNの起動回数</div>
          <div class="text p">毎日の朝晩(運動の前後)にWeRUNを起動し、マイページを下スワイプしてデータを同期してください。普段はバックグラウンドでWeRUNを実行させ、システムや他のAPPによる強制終了を防ぎます。</div>
        </template>
      </help-content>
    </template>
  </page>
</template>

<script>
  import HelpContent from '@/components/HelpContent'
  import Page from '@/components/Page'

  export default {
    components: {
      HelpContent,
      Page
    }
  }
</script>

<style lang="scss" scoped>
</style>
