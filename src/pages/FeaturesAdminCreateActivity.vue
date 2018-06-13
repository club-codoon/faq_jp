<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'イベントの作成'">
        <template slot="content">
          <div class="text">
            <b>MYイベント</b>画面の右上隅のアイコンをタップすると、<b>イベント作成</b>画面を表示することができます。各イベントテンプレートの<b>ルールを確認</b>をみて、好きなイベントを作成しましょう。
          </div>
          <img class="picture" src="../assets/images/features_admin/10.png">
          <img class="picture" src="../assets/images/features_admin/11.png">
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
