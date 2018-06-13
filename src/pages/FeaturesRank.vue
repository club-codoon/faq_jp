<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'ランキング'">
        <template slot="content">
          <div class="text">ランキングページで左右にスライドさせると、個人歩数ランキングや部門歩数ランキングなどを確認できます。ランキングをタップするとランキングリスト内の各会員の順位を確認できます。ランキングには本日、今週、今月の三つのランキングリストがあります。また右上隅のプルダウンメニューでも自分の順位を確認できます。</div>
          <img class="picture" src="../assets/images/q_and_a/16.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndARank',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
