<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'歩数ランキングレース'">
        <template slot="content">
          <div class="text">歩数ランキングレースは、開催期間中に参加者が一日の目標歩数をクリアした時間順でランク付けされます。</div>
          <div class="text">
            イベント画面で右上隅をクリックして、歩数ランキングレースを選択してください。
          </div>
          <div class="text">
            タイプを選択：【ノーマル戦】イベント期間内の、参加者の歩数/距離順でランク付けされます。【チャレンジ戦】イベント期間内に、参加者が目標歩数をクリアした時間順でランク付けされます。
          </div>
          <div class="text">
            ランキングの歩数単位を選択してください。<b>スコアデータが1000mを超えると、単位はkmとなります</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/5.png">
          <div class="text">
            参加者の選択で<b>個人</b>を選択した場合、個人の歩数でランク付けされます。参加させたい部門を選ぶと、<b>選択した部門のメンバーが自動的にイベントに参加します。</b>
          </div>
          <div class="text">
            参加者の選択で<b>チーム</b>を選択した場合、チームでランク付けするためにチーム分けする必要があります。チーム分け方法：【ランダムチーム分け】：システムがグループ全員をランダムに分けて均等に各チームに配置します。【部門別チーム分け】：複数のチームを作成し、各チームが1つ以上の部門を選択します。【トップ部門でチーム分け】：グループ組織に基づき、各トップ部門でチームを作成します。【末端部門でチーム分け】：グループ組織に基づき、各末端部門でチームを作成します。
          </div>
          <div class="text">
            <b>グループイベント開始後の組織の変更は適用対象に反映しません</b>
          </div>
          <div class="text">
            新しいメンバーのイベント参加を許可するか選択してください。
          </div>
          <div class="text">
            イベントの開始時刻と終了時刻を設定してください。<b>歩数イベントは1日単位で計算され、詳細な時間は設定できません。</b>
          </div>
          <div class="text">
            メンバーの１日の目標設定については、<b>合理的な設定をすると、異常データを回避することができます（不正データ防止）。</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/6.png">
          <div class="text">
            カバーの追加と、イベント名、イベント紹介を入力すれば、 イベントを作成できます。
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
