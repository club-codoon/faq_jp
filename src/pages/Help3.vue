<template>
  <page>
    <template slot="content">
      <help-content :title="'Androidの歩数データが0の場合の対処法'">
        <template slot="content">
          <div class="title">許可</div>
          <div class="text p">
            WeRUNをインストールし、初めて起動する際に許可するかどうかの通知が出た場合、すべて同意してください。もし許可しなかった、または許可の通知がなかった場合は歩数の計測機能がないか、ロック画面で歩数を計測できない可能性があります。WeRUNの[メニュー] - [設定] - [歩数計]にてより正確な計測方法に設定できます。
          </div>

          <div class="title">センサーテスト</div>
          <div class="text p">WeRUNは携帯のハードウェアデータを読み込むため、ハードウェアの歩数計が正常に記録できることを確認してください。WeRUNの[サイドバー] - [設定] - [センサーテスト]からロック画面でセンサー歩数計のテストを行うことができます。画面の指示に従って操作してください。</div>

          <div class="title">WeRUNの起動回数</div>
          <div class="text p">毎早晩(運動前後)にWeRUNを起動して下スワイプでデータを同期してください。バックグラウンドでWeRUNがロックされ、システムや他のAPPによって強制的に終了されることを防ぎます。</div>
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
