<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'管理者の設定'">
        <template slot="content">
          <div class="text">
            <b>グループ管理</b>の<b>管理者を設定</b>を選択し、グループの管理者を<b>追加または削除</b>することができます。
          </div>
          <img class="picture" src="../assets/images/features_admin/9.png">
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
