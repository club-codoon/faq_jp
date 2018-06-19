<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'ランキングの確認'">
        <template slot="content">
          <div class="text">ランキングにてページを左右にスライドさせると、個人歩数ランキングや部門ランキングなどを確認できます。ランキングをタップするとさらに他の会員の順位を確認できます。ランキングには今日、今週、今月の三つのランキングリストがあります。また右上のプールダウンメニューで所属部門における自分の順位を確認できます。</div>
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
