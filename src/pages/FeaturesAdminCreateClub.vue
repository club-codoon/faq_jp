<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'グループの開設'">
        <template slot="content">
          <div class="text">マイページの左上をタップすると<b>メニュー</b>が表示されます。<b>グループ開設</b>をタップし必要な情報を入力するとグループを開設できます。</div>
          <img class="picture" src="../assets/images/features_admin/1.png">
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
