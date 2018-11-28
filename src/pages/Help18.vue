<template>
  <page>
    <template slot="content">
    <help-content :title="'スマートバンドの充電方法とバッテリーの持ち時間について'">
      <template slot="content">
        <div class="text">
          WeRUNスマートバンドがフル充電された場合は、使い方にもよりますが、バッテリーは2週間～3週間持ちます。（電話やSNSの着信通知等をONにしたり、長時間走ったりした場合はバッテリーの消耗が早くなります。）スマートバンド本体の右上に、バッテリーのマークが点滅すれば、本体を必ず2～3時間以上充電してください。充電時間が短いとフル充電されない可能性があります。
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
