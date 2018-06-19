<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'マイルでの景品交換'">
        <template slot="content">
          <div class="text">メニューから<b>Weマイル残高</b>をタップするとマイル確認ページが表示されます。景品交換をタップすると交換可能な景品一覧を確認できます。景品の在庫数は毎日補充されます。</div>
          <img class="picture" src="../assets/images/q_and_a/11.png">
          <div class="text">交換したい景品を選択し、詳しい送付先住所にサイズや色などの補足情報を入力し、交換ボタンをタップすれば手続き完了となります。</div>
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
