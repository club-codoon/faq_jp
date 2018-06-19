<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'屋外ラン／ウォーク（GPS）'">
        <template slot="content">
          <div class="text">ウォーキングまたはランニングイベントに参加したメンバーは、マイページの「ウォーク/ラン」をタップしてから、スタートをタップして屋外ランニングイベントを始めます。ランニング後は終了をタップして運動を終了しルートとスコアを送信します。</div>
          <img class="picture" src="../assets/images/q_and_a/15.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndAGps',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
