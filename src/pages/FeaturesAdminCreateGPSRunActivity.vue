<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'GPS屋外ランニングレース'">
        <template slot="content">
          <div class="text">GPS屋外ランニングレースは、ラン機能を使って計測したデータを保存し、累積走行距離順や目標距離をクリアした時間順でランク付けされます。</div>
          <div class="text">イベント画面の右上にある新規作成ボタンをタップして、GPS屋外ランニングレースを選択してください。</div>
          <div class="text">GPS屋外ランニングはアプリの「ウォーク/ラン」機能のランモードで計測したデータを使用します。</div>
          <div class="text">
            ペース規則を設定します。ペースは1㎞あたりの走行時間です。値が大きいほどスピードは遅くなり、小さいほど速くなります。
            <b>合理的な値を設定することによって異常データを回避することができます。（不正データ防止）</b>
          </div>
          <div class="text">
            タイプを選択：「ノーマル戦」イベント期間内の、参加者のGPS屋外累積走行距離順/平均走行距離順でランク付けされます。「チャレンジ戦」イベント期間内に、GPS屋外ランニングで参加者が目標距離をクリアした時間順でランク付けされます。
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/8.png">
          <div class="text">
            参加者の設定で<b>個人</b>を選択した場合、個人のスコアでランク付けされます。続けて参加する部門を選ぶと、<b>選択した部門のメンバーが自動的にイベントに参加します。</b>
          </div>
          <div class="text">
            参加者の設定で<b>チーム</b>を選択した場合、チームのスコアでランク付けするためにチーム分けを行う必要があります。4種類のチーム分け方法があります。「ランダム分け」はシステムが参加者全員をランダムに分けて均等に各チームに配置します。「部門別分け」は複数のチームを作成し、各チームが1つ以上の部門を設定できます。「トップ部門分け」は組織に基づき、各トップ部門単位でチームを作成します。「末端部門分け」は組織に基づき、各末端部門単位でチームを作成します。
          </div>
          <div class="text">
            <b>イベント開始後の組織変更は参加者に影響しません。</b>
          </div>
          <div class="text">
            イベントの開始時刻と終了時刻を設定してください。<b>GPS計測型イベントは、詳細な時刻を設定できます。</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/9.png">
          <div class="text">
            カバー画像、イベント名、イベント紹介を入力すれば、 イベントを作成できます。
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/10.png">
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
