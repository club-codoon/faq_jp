<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'管理者の追加と削除'">
        <template slot="content">
          <div class="text">
            <b>グループ管理</b>の<b>管理者を設定</b>から、グループの管理者を<b>追加/削除</b>することができます。
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
