<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'計測方法の切り替え'">
        <template slot="content">
          <div class="text">携帯またはWeBandの2種類計測方法があります。マイページのスマートバンドにてWeバンドとペアリングすればWeBand計測に切り替えます。ペアリングを解除すれば自動的に携帯計測に変わります。</div>
          <img class="picture" src="../assets/images/q_and_a/6.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndASwitchDataSource',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
