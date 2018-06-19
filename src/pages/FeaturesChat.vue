<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'チャット'">
        <template slot="content">
          <div class="text">マイページの右上にあるアイコンをタップしてメッセージ画面を表示します。メッセージ画面の右上をタップし、表示された連絡帳からグループに参加している全員を確認できます。連絡したい会員を選択しチャットすることができます。</div>
          <img class="picture" src="../assets/images/q_and_a/18.png">
          <img class="picture" src="../assets/images/q_and_a/19.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndAChat',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
