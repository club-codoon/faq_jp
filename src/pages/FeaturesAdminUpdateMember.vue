<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'メンバーの所属部門の変更と削除'">
        <template slot="content">
          <div class="text">
            <b>グループ管理</b>の<b>部門管理</b>にて<b>メンバーを移動</b>をタップし、当該部門に所属しているメンバーをタップすると、対象メンバーの所属部門を変更することができます。部門リストにてメンバーを選択すると、<b>会員を削除</b>を行うことができます。
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
