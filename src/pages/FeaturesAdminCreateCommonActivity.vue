<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'歩数ランキングレース'">
        <template slot="content">
          <div class="text">歩数ランキングレースは、開催期間中に参加者の歩数をもとに、一日の目標歩数をクリアした時間順または、歩数順でランク付けされます。</div>
          <div class="text">
            イベント画面の右上にある新規作成ボタンをタップして、歩数ランキングレースを選択してください。
          </div>
          <div class="text">
            タイプを選択：「ノーマル戦」イベント期間内の、参加者の歩数または歩行距離順でランク付けされます。「チャレンジ戦」イベント期間内に、参加者が目標歩数をクリアした時間順でランク付けされます。
          </div>
          <div class="text">
            ランキングに表示されている歩数単位（歩またはメートル）を選択してください。<b>スコアが1000mを超えると、単位はkmと変わります</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/5.png">
          <div class="text">
            参加者の設定で<b>個人</b>を選択した場合、個人の歩数でランク付けされます。続けて参加する部門を選ぶと、<b>選択した部門のメンバーが自動的にイベントに参加します。</b>
          </div>
          <div class="text">
            参加者の設定で<b>チーム</b>を選択した場合、チームのスコアでランク付けするためにチーム分けを行う必要があります。4種類のチーム分け方法があります。「ランダム分け」はシステムが参加者全員をランダムに分けて均等に各チームに配置します。「部門別分け」は複数のチームを作成し、各チームが1つ以上の部門を設定できます。「トップ部門分け」は組織に基づき、各トップ部門単位でチームを作成します。「末端部門分け」は組織に基づき、各末端部門単位でチームを作成します。
          </div>
          <div class="text">
            <b>イベント開始後の組織変更は参加者に影響しません</b>
          </div>
          <div class="text">
            新しいメンバーの参加を許可するか設定してください。
          </div>
          <div class="text">
            イベントの開始時刻と終了時刻を設定してください。<b>歩数計測型イベントは1日単位で計算され、詳細な時間を設定することはできません。</b>
          </div>
          <div class="text">
            参加者の1日目標歩数を設定してください。<b>合理的な値を設定することによって異常データを回避することができます（不正データ防止）。</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/6.png">
          <div class="text">
            カバー画像、イベント名、イベント紹介を入力すれば、 イベントを作成できます。
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/7.png">
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
