<template>
  <page>
    <template slot="content">
      <help-content :title="'iPhoneの歩数データが0の場合の対処法'">
        <template slot="content">
          <div class="title">アクセス権限の設定</div>
          <div class="text p">
            WeRUNを初めてインストールする時に、「モーションとフィットネス」と「モバイルデータ通信」へのアクセスを許可するかどうかを聞かれますので、「許可」を選択してください。「許可しない」を選択した場合、携帯の[設定] > [プライバシー] > [モージョンとフィットネス]でWeRUNからのアクセスを許可し、[設定] > [WeRUN] > 「モバイルデータ通信」を許可してください。
          </div>
          <div class="title">WeRUNの起動回数</div>
          <div class="text p">計測データをサーバーに正確にアップロードするために、WeRUNを少なくとも1日に1回起動してください。APPを起動しない期間が長いほどアップロード時間も長くなり、しばらくお待ちいただく場合がございます。</div>
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
