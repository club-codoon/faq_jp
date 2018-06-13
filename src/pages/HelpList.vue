<template>
  <page>
    <template slot="content">
      <tab :defaultActiveTabName="'member'">
        <template slot="btns">
          <tab-btn :title="'管理者'" :name="'admin'"></tab-btn>
          <tab-btn :title="'メンバー'" :name="'member'"></tab-btn>
        </template>
        <template slot="tabs">
          <tab-content :name="'member'">
            <list-group>
              <list-item :text="'どの携帯でもWeRUNで歩数計を使用できますか?'" :urlName="'Help1'"></list-item>
              <list-item :text="'iPhoneの歩数データが0の場合の対処法'" :urlName="'Help2'"></list-item>
              <list-item :text="'Androidの歩数データが0の場合の対処法'" :urlName="'Help3'"></list-item>
              <list-item :text="'ママイページとランキングでデータが異なるのは？'" :urlName="'Help14'"></list-item>
              <list-item :text="'iPhoneの歩数と「ヘルスケア」データに差がある理由は？'" :urlName="'Help10'"></list-item>
              <list-item :text="'個人データ履歴の確認方法は？'" :urlName="'Help13'"></list-item>
              <list-item :text="'GPSイベントデータにマイページの距離データが反映されません'" :urlName="'Help15'"></list-item>
              <list-item :text="'GPSイベントに「ウォーク/ラン」スコアが一部反映されません'" :urlName="'Help16'"></list-item>
              <list-item :text="'毎週・毎月のランク付けは暦週と暦月ですか？'" :urlName="'Help12'"></list-item>
              <list-item :text="'WWeRUNの運動データと他のAPPのデータが異なる理由は？'" :urlName="'Help5'"></list-item>
              <list-item :text="'ネットがないと歩数計測できませんか？'" :urlName="'Help6'"></list-item>
              <list-item :text="'一部の歩数データが記録されません(Android)'" :urlName="'Help4'"></list-item>
              <list-item :text="'WeRUNのバックグラウンドでの終了を防ぐ方法(Android)'" :urlName="'Help7'"></list-item>
              <list-item :text="'Androidデータの激増と振ってもデータがない場合の対処法'" :urlName="'Help8'"></list-item>
              <list-item :text="'歩数データに関するご質問がある場合'" :urlName="'Help11'"></list-item>
              <list-item :text="'日本語版では不要のため削除。'" :urlName="'Help17'"></list-item>
            </list-group>
          </tab-content>
          <tab-content :name="'admin'">
            <list-group>
              <list-item :text="'歩数系イベントの異常データ回避方法'" :urlName="'HelpAdmin1'"></list-item>
              <list-item :text="'イベントのアーカイブ確認方法'" :urlName="'HelpAdmin2'"></list-item>
              <list-item :text="'イベントメンバーは組織によって変更されますか?'" :urlName="'HelpAdmin3'"></list-item>
            </list-group>
          </tab-content>
        </template>
      </tab>
    </template>
  </page>
</template>

<script>
  import ListGroup from '@/components/ListGroup'
  import ListItem from '@/components/ListItem'
  import Tab from '@/components/Tab'
  import TabBtn from '@/components/TabBtn'
  import TabContent from '@/components/TabContent'
  import Page from '@/components/Page'

  export default {
    name: 'HelpPage',
    components: {
      ListGroup,
      ListItem,
      Tab,
      TabBtn,
      TabContent,
      Page
    }
  }
</script>

<style lang="scss" scoped>
</style>
