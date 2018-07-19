<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'アカウントの変更'">
        <template slot="content">
          <div class="text">メニューの<b>設定</b>からログインアカウントの変更が可能です。ここに表示されているEメールまたは携帯番号でログインすることになります。</div>
          <img class="picture" src="../assets/images/q_and_a/4.png">
          <!-- <img class="picture" src="../assets/images/q_and_a/5.png"> -->
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndABindingAccount',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
