<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'グループ情報の変更'">
        <template slot="content">
          <div class="text">
            <b>グループ管理</b>の<b>会社概要</b>にてグループの情報を変更できます。
          </div>
          <img class="picture" src="../assets/images/features_admin/6.png">
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
