<template>
  <v-touch class="activity-template" ref="activityTemplate"
           :style="{'height': activityTemplateHeight}">

    <swipe-page :height="pageHeight">
      <div slot="content" class="page0" ref="page0">
        <img class="header-img" src="../assets/images/activity_template/header@2x.png"/>
        <img class="title" src="../assets/images/activity_template/pic1@2x.png"/>
        <img class="features" src="../assets/images/activity_template/pic2@2x.png"/>
        <img class="slogan" style="max-width:80%" src="../assets/images/activity_template/pic3@2x.png"/>
        <a href="mailto:help@werunclub.net" class="tel">お問い合わせ先　help@werunclub.net</a>
        <div class="brands-title">企業ロゴをタップして事例をご覧ください</div>
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
          <div class="tag">周年祝い</div>
          <div class="tag">個性的なランキング</div>
          <div class="tag">エネルギー値</div>
          <div class="tag">チャリティー</div>
          <div class="tag">抽選会</div>
        </div>
        <div class="desc">
          Belle Internationalが設立されて25周年目の節目に、 WeRUNプラットフォームにて盛大なランニングイベントを実施した。すべての社員が参加し、各人の活動量を見える「エネルギー値」に変換された。また、数値に応じて寄付金に変換しチャリティー活動に参加する人に抽選で賞品を当たる企画を実施した。この公益性の高いスポーツイベントを通じて、Belle International設立25周年を祝いながら、 社員の団結力を高め、健康増進と健康経営の目的も達成できた。
        </div>
        <div class="pic-box">
          <img class="pic" style="max-width:99%" src="../assets/images/activity_template/pic_belle@2x.png">
        </div>
      </div>
    </swipe-page>

    <swipe-page :height="pageHeight">
      <div slot="content" class="page-chevrolet page-detail" ref="pageChevrolet">
        <img class="logo" src="../assets/images/activity_template/title_chevrolet@2x.png">
        <div class="tags">
          <div class="tag">新商品発売</div>
          <div class="tag">個性的な仕組み</div>
          <div class="tag">データ分析</div>
        </div>
        <div class="desc">
          　シボレーは2017新車発表会に合わせてWeRUNにてイベントを開催。「燃焼百万カロリー」という情熱に満ちたコンセプトに合わせて、全国600以上の販売店がこのイベントに参加した。2月12日の一日だけで6万を超えたユーザがウォーキングイベントに参加し、合計歩数を消費カロリーに変換し、累計100万カロリーの消費を達成した。このイベントを通じて発売された新車は大きな注目を集めた。
        </div>
        <div class="pic-box">
          <img class="pic" style="max-width:99%" src="../assets/images/activity_template/pic_chevrolet@2x.png">
        </div>
      </div>
    </swipe-page>

    <swipe-page :height="pageHeight">
      <div slot="content" class="page-adorg page-detail" ref="pageAd">
        <img class="logo" src="../assets/images/activity_template/title_ADorg@2x.png">
        <div class="tags">
          <div class="tag">業種別競走</div>
          <div class="tag">個性的なランキング</div>
          <div class="tag">抽選会</div>
        </div>
        <div class="desc">
          2017年10月に、中国広告協会がWeRUNで「2017Kelti団体ウォーキング争奪戦」を開催した。協会に加入している千以上の会員企業及び全国にある千以上のKeltiの販売代理店がこのイベントに参加した。争奪戦はグループ単位で競い合いながら、個人間の対戦も可能。10キロ―以上を歩いた参加者向けの抽選会も用意されていた。このオンラインイベントを通じて、時間と地域の制限を無くし、普段全国に分散されているチームを一つにプラットフォームに集結し、チームの団結力を高めることができた。
        </div>
        <div class="pic-box">
          <img class="pic" style="max-width:99%" src="../assets/images/activity_template/pic_ADorg@2x.png">
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
