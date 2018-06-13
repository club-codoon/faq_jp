<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'GPS屋外ウォーキングレース'">
        <template slot="content">
          <div class="text">GPS屋外ウォーキングレースは、GPS屋外ウォーキングを使ってウォーキングデータが同期する、累積走行距離順や目標距離をクリアした時間順でランク付けされます。</div>
          <div class="text">イベント画面で右上隅をクリックして、GPS屋外ウォーキングイベントを選択してください。</div>
          <div class="text">GPS屋外ウォーキングはAPPの【ウォーク/ラン】でウォークモードによって生成されたデータを使用します。</div>
          <div class="text">
            最高ペース/最低ペースを設置する、ペースは1キロメートルに必要な時間です、値が大きいほど速度は遅くなり、値が小さいほど速くなります。
            <b>適当な設定をすると、ある程度の異常データを回避することができます（不正データ防止）。</b>
          </div>
          <div class="text">
            タイプを選択：【ノーマル戦】イベント期間内の、参加者のGPS屋外累積走行距離順/平均GPS屋外累積走行距離順でランク付けされます。【チャレンジ戦】イベント期間内に、GPS屋外ウォーキングを使って参加者が目標距離をクリアした時間順でランク付けされます。
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/11.png">
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
            イベントの開始時刻と終了時刻を設定してください。<b>GPSイベントは、詳細な時間を設定できます</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/12.png">
          <div class="text">
            カバーの追加と、イベント名、イベント紹介を入力すれば、 イベントを作成できます。
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/13.png">
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
