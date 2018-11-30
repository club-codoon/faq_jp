<template>
  <page>
    <template slot="content">
    <help-content :title="'スマートバンドとペアリングする時に、WeRUNスマートバンドはデバイス一覧に表示されないのは？'">
      <template slot="content">
        <div class="text">
          まず初めに、「対象携帯のBluetoothをOnにしている」ことをご確認ください。次に、ご利用のWeRUNスマートバンドが他の携帯とペアリングされていないかをご確認してください。他の携帯とペアリングされている場合は、ペアリング済みのアプリにて「スマートバンド＞設定＞デバイス情報＞ペアリング解除」を行ってください。
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
