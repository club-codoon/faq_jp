<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'日替ミッション'">
        <template slot="content">
          <div class="text">"マイページ"には豊富な日替ミッションがあります。日替ミッションは1日1回のみ行えます。ミッションを完了すると、マイルをゲットできます。ミッションの内容が難しいほど貰えるマイルは多くなります。</div>
          <img class="picture" src="../assets/images/q_and_a/9.png">
          <img class="picture" src="../assets/images/q_and_a/10.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndADailyMission',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
