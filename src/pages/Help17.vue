<template>
  <page>
    <template slot="content">
      <help-content :title="'スマートバンドから計測データを取得する方法'">
        <template slot="content">
          <div class="text">
            1. 携帯電話のBluetoothをオンにしてください。<br><br>
            2. マイページを下スワイプすると、歩数の上に「データ同期中」と表示されます。<br><br>
            3. 携帯電話のBluetoothをオンのままにするとスマートバンドと常時接続となり、計測データは自動的に同期されます。
          </div>
        </template>
      </help-content>
    </template>
  </page>
</template>

<script>
  import HelpContent from '@/components/HelpContent'
  import Page from '@/components/Page'

  export default {
    components: {
      HelpContent,
      Page
    }
  }
</script>

<style lang="scss" scoped>
</style>
