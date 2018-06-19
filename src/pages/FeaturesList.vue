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
            <list-item :text="'グループへの参加'" :urlName="'FeaturesJoinClub'"></list-item>
            <list-item :text="'管理者への連絡'" :urlName="'FeaturesContactAdmin'"></list-item>
            <list-item :text="'アカウントの変更'" :urlName="'FeaturesBindingAccount'"></list-item>
            <list-item :text="'計測方法の切り替え'" :urlName="'FeaturesSwitchDataSource'"></list-item>
            <list-item :text="'より正確な歩数計測方法(android)'" :urlName="'FeaturesImproveDataPrecision'"></list-item>
            <list-item :text="'データ同期の確認'" :urlName="'FeaturesCheckDataSync'"></list-item>
            <list-item :text="'日替ミッション'" :urlName="'FeaturesDailyMission'"></list-item>
            <list-item :text="'マイルでの景品交換'" :urlName="'FeaturesBean'"></list-item>
            <list-item :text="'屋外ラン／ウォーク(GPS)'" :urlName="'FeaturesGPS'"></list-item>
            <list-item :text="'ランキングの確認'" :urlName="'FeaturesRank'"></list-item>
            <list-item :text="'グループイベントの確認'" :urlName="'FeaturesActivity'"></list-item>
            <list-item :text="'チャット'" :urlName="'FeaturesChat'"></list-item>
          </list-group>
        </tab-content>
        <tab-content :name="'admin'">
          <list-group>
            <list-item :text="'グループの開設'" :urlName="'FeaturesAdminCreateClub'"></list-item>
            <list-item :text="'メンバーの追加'" :urlName="'FeaturesAdminMemberJoin'"></list-item>
            <list-item :text="'参加パスワードの変更'" :urlName="'FeaturesAdminChangeJoinPassword'"></list-item>
            <list-item :text="'グループ情報の変更'" :urlName="'FeaturesAdminUpdateClubInfo'"></list-item>
            <list-item :text="'部門組織の登録'" :urlName="'FeaturesAdminUpdateTeam'"></list-item>
            <list-item :text="'メンバーの所属部門の変更と削除'" :urlName="'FeaturesAdminUpdateMember'"></list-item>
            <list-item :text="'管理者の設定'" :urlName="'FeaturesAdminSetAdmin'"></list-item>
            <list-item :text="'イベントの作成'" :urlName="'FeaturesAdminCreateActivity'"></list-item>
            <list-item :text="'イベントの削除とアーカイブ'" :urlName="'FeaturesAdminDeleteActivity'"></list-item>
            <list-item :text="'イベントデータのエクスポート'" :urlName="'FeaturesAdminExportActivityResult'"></list-item>
          </list-group>
          <list-group :title="'イベント  作成 / 設定'">
            <list-item :text="'バーチャルラリーイベント'" :urlName="'FeaturesAdminCreateVirtualPathActivity'"></list-item>
            <list-item :text="'1万歩目標達成レース'" :urlName="'FeaturesAdminCreateKeepActivity'"></list-item>
            <list-item :text="'歩数ランキングレース'" :urlName="'FeaturesAdminCreateCommonActivity'"></list-item>
            <list-item :text="'GPS屋外ランニングレース'" :urlName="'FeaturesAdminCreateGPSRunActivity'"></list-item>
            <list-item :text="'GPS屋外ウォーキングレース'" :urlName="'FeaturesAdminCreateGPSActivity'"></list-item>
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
    components: {
      ListGroup,
      ListItem,
      Tab,
      TabBtn,
      TabContent,
      Page
    },
    created: function () {
    }
  }
</script>

<style lang="scss" scoped>
</style>
