<template>
  <v-touch class="activity-template" ref="activityTemplate"
           :style="{'height': activityTemplateHeight}">

    <swipe-page :height="pageHeight">
      <div slot="content" class="page0" ref="page0">
        <img class="header-img" src="../assets/images/activity_template/header@2x.png"/>
        <img class="title" src="../assets/images/activity_template/pic1@2x.png"/>
        <img class="features" src="../assets/images/activity_template/pic2@2x.png"/>
        <img class="slogan" src="../assets/images/activity_template/pic3@2x.png"/>
        <a href="tel:18181905261" class="tel">定制热线 18181905261</a>
        <div class="brands-title">点击查看品牌定制案例</div>
        <div class="brands">
          <img class="brands-item" src="../assets/images/activity_template/logo1@2x.png"
               @click="handleClickBelle">
          <img class="brands-item" src="../assets/images/activity_template/logo2@2x.png"
               @click="handleClickCel">
          <img class="brands-item" src="../assets/images/activity_template/logo3@2x.png"
               @click="handleClickAd">
        </div>
      </div>
    </swipe-page>

    <swipe-page :height="pageHeight">
      <div slot="content" class="page-belle page-detail" ref="pageBelle">
        <img class="logo" src="../assets/images/activity_template/title_belle@2x.png">
        <div class="tags">
          <div class="tag">周年庆</div>
          <div class="tag">个性排行榜</div>
          <div class="tag">能量值</div>
          <div class="tag">公益捐赠</div>
          <div class="tag">抽奖</div>
        </div>
        <div class="desc">
          2017年百丽集团成立25周年，为了让每个员工都共享周年庆的喜悦，企业咕咚为百丽集团定制主题H5活动。全国各城市百丽员工组成跑团进行PK，成员跑量可兑换为【能量值】，还可转化为公益基金进行捐赠，完成捐赠后可进行抽奖。通过本次活动，既让全国员工共同参与周年庆，又增加了团队成员的凝聚力，强健了身体素质。
        </div>
        <div class="pic-box">
          <img class="pic" src="../assets/images/activity_template/pic_belle@2x.png">
        </div>
      </div>
    </swipe-page>

    <swipe-page :height="pageHeight">
      <div slot="content" class="page-chevrolet page-detail" ref="pageChevrolet">
        <img class="logo" src="../assets/images/activity_template/title_chevrolet@2x.png">
        <div class="tags">
          <div class="tag">新品发售</div>
          <div class="tag">个性化架构</div>
          <div class="tag">趣味化数据</div>
        </div>
        <div class="desc">
          2017年2月，雪佛兰全新科鲁兹首发，使用企业咕咚将旗下8大区域组成两大团队，进行燃烧卡路里比赛。2月12日当天，600多家经销商联动近60000人，在全国各地运动，将运动步数转化为燃烧卡路里，为全新科鲁兹的上市营造了超强噱头。
        </div>
        <div class="pic-box">
          <img class="pic" src="../assets/images/activity_template/pic_chevrolet@2x.png">
        </div>
      </div>
    </swipe-page>

    <swipe-page :height="pageHeight">
      <div slot="content" class="page-adorg page-detail" ref="pageAd">
        <img class="logo" src="../assets/images/activity_template/title_ADorg@2x.png">
        <div class="tags">
          <div class="tag">行业比赛</div>
          <div class="tag">个性排行榜</div>
          <div class="tag">抽奖</div>
        </div>
        <div class="desc">
          2017年10月，由中国广告协会主办的“克缇优纤满分2017团队健走争霸赛”在企业咕咚平台开展，此次比赛由中国广告协会主办，针对其下近千家广告公司，以及克丽缇娜全国上千家经销商。比赛以团队为单位，进行团队间的PK，同时全体参赛成员还可进行个人PK，成员健走里程达到10K还可进行抽奖。通过本次线上活动，将全国各地的团队组织在一个平台运动，跨越了时间、空间的限制
        </div>
        <div class="pic-box">
          <img class="pic" src="../assets/images/activity_template/pic_ADorg@2x.png">
        </div>
      </div>
    </swipe-page>

  </v-touch>
</template>

<script>
  let smoothScroll = require('smoothscroll-polyfill')
  smoothScroll.polyfill()
  import SwipePage from '@/components/SwipePage'

  let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  let pageHeight = `${h}px`

  export default {
    components: {
      SwipePage
    },
    data: function () {
      return {
        crtPage: 1,
        pageCount: 1,
        pageHeight: pageHeight,
        activityTemplateHeight: pageHeight
      }
    },
    mounted: function () {
      // 获取 maxPage
      this.pageCount = this.$refs.activityTemplate.$children.length
      if (this.pageCount < 1) {
        this.pageCount = 1
      }
      this.activityTemplateHeight = `${h * this.pageCount}px`
    },
    methods: {
      handleClickBelle: function () {
        let h = this.$refs.page0.clientHeight
        if (h < 1334) {
          // h = 1334
        }
        window.scroll({
          left: 0,
          top: h,
          behavior: 'smooth'
        })
      },
      handleClickCel: function () {
        let hTop = this.$refs.page0.clientHeight
        let hBell = this.$refs.pageBelle.clientHeight
        let h = 0
        // if (hTop + hBell < 1334 * 2) {
        //   h = 1334 * 2
        // } else {
        //   h = hTop + hBell
        // }
        h = hTop + hBell
        window.scroll({
          left: 0,
          top: h,
          behavior: 'smooth'
        })
      },
      handleClickAd: function () {
        let hTop = this.$refs.page0.clientHeight
        let hBell = this.$refs.pageBelle.clientHeight
        let hChe = this.$refs.pageChevrolet.clientHeight
        let h = 0
        // if (hTop + hBell + hChe < 1334 * 3) {
        //   h = 1334 * 3
        // } else {
        //   h = hTop + hBell + hChe
        // }
        h = hTop + hBell + hChe
        window.scroll({
          left: 0,
          top: h,
          behavior: 'smooth'
        })
      }
    },
    watch: {
      'crtPage': function (v) {
        window.scroll({
          left: 0,
          top: `${(v - 1) * h}`,
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../node_modules/hotcss/src/px2rem.scss";
  @import "../assets/style/settings.scss";
  @import "../assets/style/flex.scss";

  .activity-template {
    .page0 {
      @include flexbox;
      @include flex-direction(column);
      @include justify-content(center);
      @include align-items(center);
      text-align: center;
      max-width: 100%;

      .header-img {
        height: px2rem(320px);
        margin-bottom: px2rem(45px);
      }
      .title {
        width: px2rem(554px);
        margin-bottom: px2rem(72px);
      }
      .features {
        width: px2rem(584px);
        margin-bottom: px2rem(64px);
      }
      .slogan {
        margin-bottom: px2rem(36px);
      }
      .tel {
        height: px2rem(42px);
        line-height: px2rem(42px);
        border-radius: px2rem(21px);
        border: 2px solid #2f8bd8;
        color: #2f8bd8;
        width: px2rem(364px);
        margin-bottom: px2rem(48px);
        font-size: px2rem(30px);
        text-align: center;
        font-weight: normal;
        text-decoration: none;
        display: inline-block;
      }
      .brands-title {
        font-size: px2rem(24px);
        color: #333;
        margin-bottom: px2rem(41px);
      }
      .brands {
        margin-bottom: px2rem(48px);
        .brands-item {
          height: px2rem(72px);
        }
      }
    }

    .page-detail {
      padding: 0 px2rem(40px);

      .logo {
        max-width: 100%;
        margin-top: px2rem(60px);
        margin-bottom: px2rem(40px);
      }
      .tags {
        margin-bottom: px2rem(30px);
        font-size: 0;
        .tag {
          font-size: px2rem(24px);
          border: 1px solid #2f8bd8;
          display: inline-block;
          border-radius: px2rem(16px);
          padding: px2rem(5px) px2rem(16px);
          color: #2f8bd8;
          text-align: center;
          margin-right: px2rem(15px);
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .desc {
        font-size: px2rem(26px);
        color: #333;
        line-height: 200%;
        margin-bottom: px2rem(50px);
      }
      .pic-box {
        @include flexbox;
        @include flex-direction(column);
        @include justify-content(center);
        @include align-items(center);
        text-align: center;
        .pic {

        }
      }
    }

    .page-adorg, .page-belle {
      background: #fff;
      .pic-box {
        .pic {
        }
      }
    }
  }
</style>
