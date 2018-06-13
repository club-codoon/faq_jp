<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'マイルでの景品交換'">
        <template slot="content">
          <div class="text">トップページ左上隅のメニューから<b>Weマイル残高</b>をタップするとポイント管理ページが表示されます。マイル交換をタップすると交換できる景品を見ることができます。景品は毎日補充されます。</div>
          <img class="picture" src="../assets/images/q_and_a/11.png">
          <div class="text">交換したい景品を選択してください。正しい住所とサイズや色などの補足情報を入力し、交換ボタンをタップしてください。</div>
          <img class="picture" src="../assets/images/q_and_a/12.png">
          <img class="picture" src="../assets/images/q_and_a/13.png">
          <img class="picture" src="../assets/images/q_and_a/14.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndABean',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
