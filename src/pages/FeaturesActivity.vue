<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'グループのイベントを確認'">
        <template slot="content">
          <div class="text">イベント画面でグループの開催中または今後開催されるイベントを確認することができます。イベントをクリックして、メンバーの個人スコアやルールなどの情報を確認することができます。</div>
          <img class="picture" src="../assets/images/q_and_a/17.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndAActivity',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
