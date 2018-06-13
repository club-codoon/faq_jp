<template>
  <page>
    <template slot="content">
      <q-and-a-content :title="'より正確な歩数計測方法(android)'">
        <template slot="content">
          <div class="text">一部のandroid携帯ではロック画面で歩数計測できなかったり、歩数計のプロセスがオフになったりする場合があります。WeRUN APPの設定で歩数計測がより正確な方法を見つけて、下記の手順に従い設定してください。</div>
          <img class="picture" src="../assets/images/q_and_a/7.png">
        </template>
      </q-and-a-content>
    </template>
  </page>
</template>

<script>
  import Page from '@/components/Page'
  import QAndAContent from '@/components/QAndAContent.vue'

  export default {
    name: 'QAndAGps',
    components: {
      Page,
      QAndAContent
    }
  }
</script>

<style lang="scss" scoped>
</style>
