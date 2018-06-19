<template>
   <page>
    <template slot="content">
      <q-and-a-content :title="'データ同期の確認'">
        <template slot="content">
          <div class="text">歩数データが同期されたかどうかを確認したい場合、マイページに表示されている歩数の上で同期時刻を確認してください。もし同期時刻が数時間前の場合、マイページを下スワイプすれば直ちにデータを同期することができます。</div>
          <img class="picture" src="../assets/images/q_and_a/8.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndACheckDataSync',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
