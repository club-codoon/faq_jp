<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'イベントの作成'">
        <template slot="content">
          <div class="text">
            <b>イベント</b>画面の右上にあるアイコンをタップすると、<b>イベント作成</b>画面が表示されます。各イベントテンプレートの<b>ルール</b>を確認し、あなたのニーズに合うイベントを作成することができます。
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
