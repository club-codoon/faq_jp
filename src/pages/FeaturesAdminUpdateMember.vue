<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'会員の部門変更と削除'">
        <template slot="content">
          <div class="text">
            <b>グループ管理</b>の<b>部門管理</b>から変更対象の会員が現在在籍する部門を選び<b>メンバーを移動</b>をタップすると、会員の部門を変更することができます。部門管理リストで削除したい会員を選択すると、<b>会員を削除</b>することができます。
          </div>
          <img class="picture" src="../assets/images/features_admin/8.png">
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
