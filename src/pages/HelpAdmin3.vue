<template>
  <page>
    <template slot="content">
      <help-content :title="'イベントメンバーは組織によって変更されますか?'">
        <template slot="content">
          <div class="text">
            個人戦イベント:<b>グループの新メンバー</b>がイベントに参加できます。組織を変更すると<b>現在のイベントに反映する</b>から参加メンバーを構成します。イベント開始後、
            組織の変更によってメンバーを移動します。移動したメンバーのイベント関連データは<b>消去され復元できませんので、ご注意ください。</b>
          </div>
          <div class="text">
            グループ戦イベント:<b>グループの新メンバー</b>がイベントに参加できます。イベント開始後に組織を変更しても現在のイベントには反映されません。
            メンバーはグループを移動/脱退すると、そのメンバーのイベント関連データは<b>消去され復元できませんので、ご注意ください。</b>
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
