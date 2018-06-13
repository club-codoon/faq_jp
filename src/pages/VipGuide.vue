<template>
<div class="readable">
  <p>亲爱的企业咕咚管理员，您好：<br><br>

  为了更好的为您提供运动健康管理服务，企业咕咚将于2018年4月15日起全面升级为收费服务。<br><br>

  感谢您的持续支持，祝您工作顺利、身体健康！
  </p>

  <p>
    <h3>收费套餐：</h3>
    <hr>
    <table class="plans">
      <thead>
        <tr>
          <th>套餐</th>
          <th>月付(￥)</th>
          <th>季付(￥)</th>
          <th>年付(￥)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>E0<br>(&lt;21人)</th>
          <td>免费</td>
          <td>免费</td>
          <td>免费</td>
        </tr>
        <tr>
          <th>E1<br>(21~100人)</th>
          <td><s>1500</s><span class="special-price">1000</span></td>
          <td><s>2200</s><span class="special-price">1500</span></td>
          <td><s>5200</s><span class="special-price">3600</span></td>
        </tr>
        <tr>
          <th>E2<br>(101~500人)</th>
          <td><s>5800</s><span class="special-price">4000</span></td>
          <td><s>9000</s><span class="special-price">6000</span></td>
          <td><s>21000</s><span class="special-price">14400</span></td>
        </tr>
        <tr>
          <th>E3<br>(501~1000人)</th>
          <td><s>9000</s><span class="special-price">6000</span></td>
          <td><s>13000</s><span class="special-price">9000</span></td>
          <td><s>30000</s><span class="special-price">21000</span></td>
        </tr>
        <tr>
          <th>E4<br>(&gt;1000人)</th>
          <td><s>15000</s><span class="special-price">10000</span></td>
          <td><s>22000</s><span class="special-price">15000</span></td>
          <td><s>52000</s><span class="special-price">36000</span></td>
        </tr>
      </tbody>
    </table>
  </p>

  <p>
    <h3>付款方式：</h3>
    <hr>

    您可以通过银行转账的方式缴纳服务费 <br><br>

    户　名：成都乐动信息技术有限公司<br>
    账　户：128904684910302<br>
    开户行：招商银行股份有限公司成都天顺路支行<br>
    开户地：四川省成都市<br>
    付款时请务必备注：<span class="highlight-bold" v-if="clubID>0">企业团队ID: {{ clubID }}</span><span class="highlight-bold"  v-else>企业团队ID</span><br><br>

    付费服务咨询或获取发票请联系我们<br>
    电　话：<a href="tel:18908045767">18908045767</a><br>
    Email：<a href="mailto:club@codoon.com">club@codoon.com</a><br>
  </p>

  <p>
    <h3>说明：</h3>
    <hr>
    1. 套餐内容与价格在正式收费前仍然有可能调整 <br>
    2. 最终解释权归企业咕咚所有 <br>
  </p>
</div>
</template>

<style lang="scss" scoped>
@import "../../node_modules/hotcss/src/px2rem.scss";
$designWidth : 750;

.readable {
  padding: px2rem(20) px2rem(30);
  font-size: 16px;
  line-height: 1.8em;

  h3 {
    font-size: 16px;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
  }

  .highlight-bold {
    font-weight: bold;
  }

  .plans {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;

    td, th {
      border: 1px solid #dee2e6;
      padding: px2rem(10) px2rem(10);
      font-size: 14px;
    }

    th {
      background: #f5f7fa;
    }

    td {
      text-align: right;
    }

    s {
      font-size: 14px;
      color: #666;
    }

    tbody {
      th {
        text-align: left;
      }
    }

    tfoot {
      td {
        text-align: left;
      }
    }
    .special-price {
      font-size: 14px;
      color: green;
      clear: left;
      display:block;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      clubID: 0
    }
  },
  created () {
    window.document.title = '公告：付费说明'
    this.clubID = this.$route.query.club_id || 0
  }
}
</script>
