<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'バーチャルラリーイベント'">
        <template slot="content">
          <div class="text">バーチャルラリーイベントは、参加者の毎日の歩数データをバーチャルルートの距離に変換し、各チェックポイントと終点をクリアした時間順でランク付けされます。</div>
          <div class="text">イベント画面で右上隅をクリックして、バーチャルラリーイベントを選択してください。</div>
          <div class="text">イベントの開始時刻と終了時刻を設定してください、<b>歩数イベントは1日単位で計算され、詳細な時間を設定することはできません。</b></div>
          <div class="text">
            参加者の選択で<b>個人</b>を選択した場合、個人の歩数でランク付けされます。参加させたい部門を選ぶと、<b>選択した部門のメンバーが自動的にイベントに参加します。</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/1.png">
          <div class="text">
            参加者の選択で<b>チーム</b>を選択した場合、チームでランク付けするためにチーム分けする必要があります。チーム分け方法：【ランダムチーム分け】：システムがグループ全員をランダムに分けて均等に各チームに配置します。【部門別チーム分け】：複数のチームを作成し、各チームが1つ以上の部門を選択します。【トップ部門でチーム分け】：グループ組織に基づき、各トップ部門でチームを作成します。【末端部門でチーム分け】：グループ組織に基づき、各末端部門でチームを作成します。
          </div>
          <div class="text">
            <b>グループイベント開始後の組織の変更は適用対象に反映しません</b>
          </div>
          <img class="picture" src="../assets/images/features_admin_activity/2.png">
          <div class="text">新しいメンバーのイベント参加を許可するか選択してください。</div>
          <img class="picture" src="../assets/images/features_admin_activity/3.png">
          <div class="text">
            1日当たりの参加者の上限歩数を設定します。上限歩数を超えたデータはカウントされません<b>合理的な数値を設定をすると、異常データを回避することができます（不正データ防止）。</b>
          </div>
          <div class="text">チェックポイントクリア歩数を設定してください。</div>
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
