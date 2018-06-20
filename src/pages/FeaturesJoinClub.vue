<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'グループへの参加'">
        <template slot="content">
          <div class="text">マイページの左上をタップしメニューが表示されます。「グループ参加」をタップし、キーワード検索またはグループのQRコードでグループに参加することができます。また、「友達を招待」でメンバーに参加情報を送信することもできます。</div>
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
