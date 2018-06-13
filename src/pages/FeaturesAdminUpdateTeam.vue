<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'部門の追加と削除'">
        <template slot="content">
          <div class="text">
            <b>グループ管理</b>の<b>部門管理</b>から、<b>部門を追加</b>をタップをすると、新しい部門を追加することができます。削除したい部門を選択し、右上隅の<b>部門を削除</b>をタップすると部門を削除することができます（部門を削除する前に、この部門に下位部門や会員がいないことを確認してください）。
          </div>
          <img class="picture" src="../assets/images/features_admin/7.png">
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
