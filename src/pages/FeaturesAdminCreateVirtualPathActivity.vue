<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'バーチャルラリーイベント'">
        <template slot="content">
          <div class="text">バーチャルラリーイベントは、参加者の毎日の歩数データをバーチャルルートの距離に変換し、設定された目標歩数をクリアしていくイベントです。</div>
          <div class="text">イベント画面の右上にある新規作成ボタンをタップして、バーチャルラリーイベントを選択してください。</div>
          <div class="text">イベントの開始時刻と終了時刻を設定してください。<b>歩数計測型イベントは1日単位で計算され、詳細な時間を設定することはできません。</b></div>
          <div class="text">
            参加者の設定で<b>個人</b>を選択した場合、個人の歩数でランク付けされます。続けて参加する部門を選ぶと、<b>選択した部門のメンバーが自動的にイベントに参加します。</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/1.png">
          <div class="text">
            参加者の設定で<b>チーム</b>を選択した場合、チームのスコアでランク付けするためにチーム分けを行う必要があります。4種類のチーム分け方法があります。「ランダム分け」はシステムが参加者全員をランダムに分けて均等に各チームに配置します。「部門別分け」は複数のチームを作成し、各チームが1つ以上の部門を設定できます。「トップ部門分け」は組織に基づき、各トップ部門単位でチームを作成します。「末端部門分け」は組織に基づき、各末端部門単位でチームを作成します。
          </div>
          <div class="text">
            <b>イベント開始後の組織変更は参加者に影響しません。</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/2.png">
          <div class="text">新しいメンバーの参加を許可するか設定してください。</div>
          <img class="picture" src="../assets/images/features_admin_activity/3.png">
          <div class="text">
            参加者の1日当たりの上限歩数を設定してください。上限歩数を超えたデータはカウントされません。<b>合理的な値を設定することによって異常データを回避することができます。（不正データ防止）</b>
          </div>
          <div class="text">チェックポイントをクリアするための歩数を設定してください。</div>
          <div class="text">イベント名、イベント紹介を入力すれば、 イベントを作成できます。</div>
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
