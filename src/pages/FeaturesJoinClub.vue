<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'グループ参加'">
        <template slot="content">
          <div class="text">マイページの左上隅をタップし、マイグループから管理者をタップすれば現在のグループ管理者を確認することができます。管理者の記載した電話番号/Eメール、チャットで管理者に連絡できます。管理者は部門の調整や、グループメンバーの削除などができます。</div>
          <img class="picture" src="../assets/images/q_and_a/1.png">
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
