<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'1万歩目標達成レース'">
        <template slot="content">
          <div class="text">1万歩目標達成レースは、開催期間中に参加者の1日の歩数が1万歩に達したかどうか（基準値は変更可能）の目標達成状況でランク付けされます。</div>
          <div class="text">イベント画面の右上にある新規作成ボタンをタップして、1万歩目標達成レースを選択してください。</div>
          <div class="text">カバー画像、イベント名を入力し、イベントの開始時刻と終了時刻を設定してください。<b>歩数イベントは1日単位で計算され、詳細な時間を設定することはできません。</b></div>
          <div class="text">参加者の1日目標歩数を設定してください。<b>合理的な値を設定することによって異常データを回避することができます。（不正データ防止）</b></div>
          <div class="text">参加者の設定でイベントに参加する部門を選ぶと<b>部門のメンバーが自動的にイベントに参加します。</b></div>
          <div class="text">
            1万歩目標達成レースには二つのランキングがあります。「個人ランキング」開催期間中、毎日の歩数で目標を達成したかどうかで達成率（目標達成日数/イベント日数*100%）でランク付けされます。同じ達成率の場合は歩行距離で判断します。「部門ランキング」開催期間中の部門達成率（部門参加者の累積達成率/部門参加者人数）でランク付けされます。同じ達成率の場合は歩行距離で判断します。
          </div>
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
