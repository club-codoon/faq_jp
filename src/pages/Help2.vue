<template>
  <page>
    <template slot="content">
      <help-content :title="'iPhoneの歩数データが0の場合の対処法'">
        <template slot="content">
          <div class="title">許可</div>
          <div class="text p">
            WeRUNを初めてインストールすると、「モーションとフィットネス」と「モバイルデータ通信」のアクセスを許可するかどうかの通知があります。「許可」を選択してください。"許可しない"を選択した場合、携帯の[設定] - [プライバシー] - [モージョンとフィットネス]でWeRUNのアクセスを許可し、[設定] - [WeRUN] - [無線データ]から「モバイルデータ通信」を許可します。
          </div>
          <div class="title">WeRUNの起動回数</div>
          <div class="text p">データをサーバーに正確にアップロードするために、WeRUNを少なくとも1日に1回起動してください。APPを起動しない時間が長いほどアップロード時間も長くなります。しばらくお待ちください。</div>
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
