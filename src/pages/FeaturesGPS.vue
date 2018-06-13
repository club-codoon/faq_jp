<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'屋外ランニング（GPS）'">
        <template slot="content">
          <div class="text">ウォーキングまたはランニングイベントに参加したメンバーは、マイページのウォーク/ランから、スタートをタップして屋外ランニングイベントを始めます。ランニング後は終了をタップして今回のランニングルートとスコアを同期します。</div>
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
