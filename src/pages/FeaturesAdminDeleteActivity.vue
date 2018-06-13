<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'イベントのアーカイブ/削除'">
        <template slot="content">
          <div class="text">
            <b>イベント</b>画面で、削除するイベントをタップ、<b>イベント情報</b>の右上隅のメニューをタップ、<b>アーカイブ/削除</b>を選択してください。
          </div>
          <img class="picture" src="../assets/images/features_admin/12.png">
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
