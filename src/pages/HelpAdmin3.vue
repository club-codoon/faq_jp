<template>
  <page>
    <template slot="content">
      <help-content :title="'イベント参加者は組織変更によって影響されますか?'">
        <template slot="content">
          <div class="text">
            個人戦:<b>新規参加のメンバー</b>はイベントに参加できます。組織変更の結果は<b>イベントの参加者に反映されます</b>。イベント開始後、参加者は組織変更によってイベントから取り除かれた場合、イベントにおける対象メンバーのデータは<b>消去され復元できませんので、ご注意ください。</b>
          </div>
          <div class="text">
            団体戦:<b>新規参加のメンバー</b>はイベントに参加できます。イベント開始後の組織変更は参加者に影響しません。
            メンバーはグループを脱退または取り除かれると、イベントにある当該メンバーのデータは<b>消去され復元できませんので、ご注意ください。</b>
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
