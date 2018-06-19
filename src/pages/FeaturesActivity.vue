<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'グループイベントの確認'">
        <template slot="content">
          <div class="text">イベント画面にてグループの開催中または今後開催されるイベントを閲覧することができます。イベントをクリックして、参加者のスコアやイベントのルールなどの情報を確認できます。</div>
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
