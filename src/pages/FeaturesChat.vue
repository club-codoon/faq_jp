<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'チャット'">
        <template slot="content">
          <div class="text">トップページの右上隅をタップしてメッセージページを表示します。メッセージページの右上隅をタップし、表示された連絡帳から対象の会員を選択し、チャットすることができます。</div>
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
