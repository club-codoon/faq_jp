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
              <list-item :text="'スマートバンドとペアリングする時に、WeRUNスマートバンドはデバイス一覧に表示されないのは？'" :urlName="'Help9'"></list-item>
              <list-item :text="'スマートバンドの充電方法とバッテリーの持ち時間について'" :urlName="'Help18'"></list-item>
              <list-item :text="'どんな携帯でもWeRUNアプリで歩数を計測できますか?'" :urlName="'Help1'"></list-item>
              <list-item :text="'iPhoneの歩数データが0の場合の対処法'" :urlName="'Help2'"></list-item>
              <list-item :text="'Android携帯の歩数データが0の場合の対処法'" :urlName="'Help3'"></list-item>
              <list-item :text="'マイページとランキングでの歩数が異なるのは？'" :urlName="'Help14'"></list-item>
              <list-item :text="'アプリの歩数はiPhoneの「ヘルスケア」と差がある理由は？'" :urlName="'Help10'"></list-item>
              <list-item :text="'過去の計測データの確認方法は？'" :urlName="'Help13'"></list-item>
              <list-item :text="'GPSイベントにマイページの距離値が反映されない理由は？'" :urlName="'Help15'"></list-item>
              <list-item :text="'GPSイベントに「ウォーク/ラン」で計測したデータの一部のみ反映される理由は？'" :urlName="'Help16'"></list-item>
              <list-item :text="'毎週・毎月のランキングは暦週と暦月ですか？'" :urlName="'Help12'"></list-item>
              <list-item :text="'WeRUNの運動データと他のAPPのデータが異なる理由は？'" :urlName="'Help5'"></list-item>
              <list-item :text="'ネットがなくても歩数計測できますか？'" :urlName="'Help6'"></list-item>
              <list-item :text="'一部の歩数が記録されない理由は？(Android)'" :urlName="'Help4'"></list-item>
              <list-item :text="'バックグラウンドで実行中のWeRUNの強制終了を防ぐ方法(Android)'" :urlName="'Help7'"></list-item>
              <list-item :text="'Android携帯において計測データの激増または振ってもデータが取れない理由は？'" :urlName="'Help8'"></list-item>
              <list-item :text="'歩数データに関するご質問がある場合'" :urlName="'Help11'"></list-item>
              <list-item :text="'スマートバンドから計測データを取得する方法'" :urlName="'Help17'"></list-item>
            </list-group>
          </tab-content>
          <tab-content :name="'admin'">
            <list-group>
              <list-item :text="'歩数計測型イベントにおける異常データの回避'" :urlName="'HelpAdmin1'"></list-item>
              <list-item :text="'イベントをアーカイブしてからの確認方法'" :urlName="'HelpAdmin2'"></list-item>
              <list-item :text="'イベント参加者は組織変更によって影響されますか?'" :urlName="'HelpAdmin3'"></list-item>
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
