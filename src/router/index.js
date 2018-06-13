import Vue from 'vue'
import Router from 'vue-router'

import HelpList from '@/pages/HelpList'
import Help1 from '@/pages/Help1'
import Help2 from '@/pages/Help2'
import Help3 from '@/pages/Help3'
import Help4 from '@/pages/Help4'
import Help5 from '@/pages/Help5'
import Help6 from '@/pages/Help6'
import Help7 from '@/pages/Help7'
import Help8 from '@/pages/Help8'
import Help10 from '@/pages/Help10'
import Help11 from '@/pages/Help11'
import Help12 from '@/pages/Help12'
import Help13 from '@/pages/Help13'
import Help14 from '@/pages/Help14'
import Help15 from '@/pages/Help15'
import Help16 from '@/pages/Help16'
import Help17 from '@/pages/Help17'
import HelpAdmin1 from '@/pages/HelpAdmin1'
import HelpAdmin2 from '@/pages/HelpAdmin2'
import HelpAdmin3 from '@/pages/HelpAdmin3'

import FeaturesList from '@/pages/FeaturesList'
import FeaturesJoinClub from '@/pages/FeaturesJoinClub'
import FeaturesChat from '@/pages/FeaturesChat'
import FeaturesActivity from '@/pages/FeaturesActivity'
import FeaturesRank from '@/pages/FeaturesRank'
import FeaturesGPS from '@/pages/FeaturesGPS'
import FeaturesBean from '@/pages/FeaturesBean'
import FeaturesDailyMission from '@/pages/FeaturesDailyMission'
import FeaturesCheckDataSync from '@/pages/FeaturesCheckDataSync'
import FeaturesImproveDataPrecision from '@/pages/FeaturesImproveDataPrecision'
import FeaturesSwitchDataSource from '@/pages/FeaturesSwitchDataSource'
import FeaturesBindingAccount from '@/pages/FeaturesBindingAccount'
import FeaturesContactAdmin from '@/pages/FeaturesContactAdmin'
import FeaturesAdminCreateClub from '@/pages/FeaturesAdminCreateClub'
import FeaturesAdminMemberJoin from '@/pages/FeaturesAdminMemberJoin'
import FeaturesAdminChangeJoinPassword from '@/pages/FeaturesAdminChangeJoinPassword'
import FeaturesAdminUpdateClubInfo from '@/pages/FeaturesAdminUpdateClubInfo'
import FeaturesAdminUpdateTeam from '@/pages/FeaturesAdminUpdateTeam'
import FeaturesAdminUpdateMember from '@/pages/FeaturesAdminUpdateMember'
import FeaturesAdminSetAdmin from '@/pages/FeaturesAdminSetAdmin'
import FeaturesAdminCreateActivity from '@/pages/FeaturesAdminCreateActivity'
import FeaturesAdminDeleteActivity from '@/pages/FeaturesAdminDeleteActivity'
import FeaturesAdminExportActivityResult from '@/pages/FeaturesAdminExportActivityResult'
import FeaturesAdminExportData from '@/pages/FeaturesAdminExportData'
import FeaturesAdminCreateVirtualPathActivity from '@/pages/FeaturesAdminCreateVirtualPathActivity'
import FeaturesAdminCreateKeepActivity from '@/pages/FeaturesAdminCreateKeepActivity'
import FeaturesAdminCreateCommonActivity from '@/pages/FeaturesAdminCreateCommonActivity'
import FeaturesAdminCreateGPSRunActivity from '@/pages/FeaturesAdminCreateGPSRunActivity'
import FeaturesAdminCreateGPSActivity from '@/pages/FeaturesAdminCreateGPSActivity'

import V14NewFeatures from '@/pages/v14NewFeatures'
import V15NewFeatures from '@/pages/v15NewFeatures'
import V16NewFeatures from '@/pages/v16NewFeatures'
import V17NewFeatures from '@/pages/v17NewFeatures'

import ActivityTemplate from '@/pages/ActivityTemplate'

import VipGuide from '@/pages/VipGuide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/v14_new_features',
      name: 'V14NewFeatures',
      component: V14NewFeatures
    },
    {
      path: '/v15_new_features',
      name: 'V15NewFeatures',
      component: V15NewFeatures
    },
    {
      path: '/v16_new_features',
      name: 'V16NewFeatures',
      component: V16NewFeatures
    },
    {
      path: '/v17_new_features',
      name: 'V17NewFeatures',
      component: V17NewFeatures
    },
    {
      path: '/help',
      name: 'HelpList',
      component: HelpList
    },
    {
      path: '/help/1',
      name: 'Help1',
      component: Help1
    },
    {
      path: '/help/2',
      name: 'Help2',
      component: Help2
    },
    {
      path: '/help/3',
      name: 'Help3',
      component: Help3
    },
    {
      path: '/help/4',
      name: 'Help4',
      component: Help4
    },
    {
      path: '/help/5',
      name: 'Help5',
      component: Help5
    },
    {
      path: '/help/6',
      name: 'Help6',
      component: Help6
    },
    {
      path: '/help/7',
      name: 'Help7',
      component: Help7
    },
    {
      path: '/help/8',
      name: 'Help8',
      component: Help8
    },
    {
      path: '/help/10',
      name: 'Help10',
      component: Help10
    },
    {
      path: '/help/11',
      name: 'Help11',
      component: Help11
    },
    {
      path: '/help/12',
      name: 'Help12',
      component: Help12
    },
    {
      path: '/help/13',
      name: 'Help13',
      component: Help13
    },
    {
      path: '/help/14',
      name: 'Help14',
      component: Help14
    },
    {
      path: '/help/15',
      name: 'Help15',
      component: Help15
    },
    {
      path: '/help/16',
      name: 'Help16',
      component: Help16
    },
    {
      path: '/help/17',
      name: 'Help17',
      component: Help17
    },
    {
      path: '/help/admin/1',
      name: 'HelpAdmin1',
      component: HelpAdmin1
    },
    {
      path: '/help/admin/2',
      name: 'HelpAdmin2',
      component: HelpAdmin2
    },
    {
      path: '/help/admin/3',
      name: 'HelpAdmin3',
      component: HelpAdmin3
    },

    // features
    {
      path: '/features',
      name: 'FeaturesList',
      component: FeaturesList
    },
    {
      path: '/features/join_club',
      name: 'FeaturesJoinClub',
      component: FeaturesJoinClub
    },
    {
      path: '/features/contact_admin',
      name: 'FeaturesContactAdmin',
      component: FeaturesContactAdmin
    },
    {
      path: '/features/binding_account',
      name: 'FeaturesBindingAccount',
      component: FeaturesBindingAccount
    },
    {
      path: '/features/switch_data_source',
      name: 'FeaturesSwitchDataSource',
      component: FeaturesSwitchDataSource
    },
    {
      path: '/features/improve_data_precision',
      name: 'FeaturesImproveDataPrecision',
      component: FeaturesImproveDataPrecision
    },
    {
      path: '/features/check_data_sync',
      name: 'FeaturesCheckDataSync',
      component: FeaturesCheckDataSync
    },
    {
      path: '/features/daily_mission',
      name: 'FeaturesDailyMission',
      component: FeaturesDailyMission
    },
    {
      path: '/features/bean',
      name: 'FeaturesBean',
      component: FeaturesBean
    },
    {
      path: '/features/gps',
      name: 'FeaturesGPS',
      component: FeaturesGPS
    },
    {
      path: '/features/rank',
      name: 'FeaturesRank',
      component: FeaturesRank
    },
    {
      path: '/features/activity',
      name: 'FeaturesActivity',
      component: FeaturesActivity
    },
    {
      path: '/features/chat',
      name: 'FeaturesChat',
      component: FeaturesChat
    },
    {
      path: '/features/admin_create_club',
      name: 'FeaturesAdminCreateClub',
      component: FeaturesAdminCreateClub
    },
    {
      path: '/features/admin_create_club',
      name: 'FeaturesAdminMemberJoin',
      component: FeaturesAdminMemberJoin
    },
    {
      path: '/features/admin_change_join_password',
      name: 'FeaturesAdminChangeJoinPassword',
      component: FeaturesAdminChangeJoinPassword
    },
    {
      path: '/features/admin_update_club_info',
      name: 'FeaturesAdminUpdateClubInfo',
      component: FeaturesAdminUpdateClubInfo
    },
    {
      path: '/features/admin_update_team',
      name: 'FeaturesAdminUpdateTeam',
      component: FeaturesAdminUpdateTeam
    },
    {
      path: '/features/admin_update_member',
      name: 'FeaturesAdminUpdateMember',
      component: FeaturesAdminUpdateMember
    },
    {
      path: '/features/admin_set_admin',
      name: 'FeaturesAdminSetAdmin',
      component: FeaturesAdminSetAdmin
    },
    {
      path: '/features/admin_create_activity',
      name: 'FeaturesAdminCreateActivity',
      component: FeaturesAdminCreateActivity
    },
    {
      path: '/features/admin_delete_activity',
      name: 'FeaturesAdminDeleteActivity',
      component: FeaturesAdminDeleteActivity
    },
    {
      path: '/features/admin_export_activity_result',
      name: 'FeaturesAdminExportActivityResult',
      component: FeaturesAdminExportActivityResult
    },
    {
      path: '/features/admin_export_data',
      name: 'FeaturesAdminExportData',
      component: FeaturesAdminExportData
    },
    {
      path: '/features/admin_create_virtual_path_activity',
      name: 'FeaturesAdminCreateVirtualPathActivity',
      component: FeaturesAdminCreateVirtualPathActivity
    },
    {
      path: '/features/admin_create_keep_activity',
      name: 'FeaturesAdminCreateKeepActivity',
      component: FeaturesAdminCreateKeepActivity
    },
    {
      path: '/features/admin_create_common_activity',
      name: 'FeaturesAdminCreateCommonActivity',
      component: FeaturesAdminCreateCommonActivity
    },
    {
      path: '/features/admin_create_gps_run_activity',
      name: 'FeaturesAdminCreateGPSRunActivity',
      component: FeaturesAdminCreateGPSRunActivity
    },
    {
      path: '/features/admin_create_gps_activity',
      name: 'FeaturesAdminCreateGPSActivity',
      component: FeaturesAdminCreateGPSActivity
    },

    {
      path: '/activity_template',
      name: 'ActivityTemplate',
      component: ActivityTemplate
    },

    {
      path: '/vip_guide',
      name: 'VipGuide',
      component: VipGuide
    }
  ]
})
