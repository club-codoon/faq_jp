<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'管理者への連絡'">
        <template slot="content">
          <div class="text">マイページの左上のメニューボタンをタップし、MYグループでグループ情報を閲覧できます。管理者をタップすると、現在のグループ管理者の情報を確認することができます。表示されている電話番号やEメール、またはチャットによって管理者に連絡できます。管理者は部門の変更やグループメンバーの削除などができます。</div>
          <img class="picture" src="../assets/images/q_and_a/2.png">
          <img class="picture" src="../assets/images/q_and_a/3.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndAContactAdmin',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
