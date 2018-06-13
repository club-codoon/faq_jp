<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'友達をグループに招待'">
        <template slot="content">
          <div class="text">
            管理者は、<b>グループ管理</b>の<b>友達を招待</b>機能でメンバーを招待することができます。
            メンバーは、トップページの左上隅をタップし表示された<b>メニュー</b>画面で、<b>グループ参加</b>をタップ、企業名やグループ名で検索するか、QRコードをスキャンしてグループに参加します。
          </div>
          <img class="picture" src="../assets/images/features_admin/2.png">
          <img class="picture" src="../assets/images/features_admin/3.png">
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
