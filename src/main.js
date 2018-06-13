// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import ba from 'vue-ba'
Vue.use(ba, '10dfeffc759320a99583b105157d0001')

import VueTouch from 'vue-touch'
Vue.use(VueTouch)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let pageTitle = 'WeRUN'
  if (to.path && to.path.match(/\/help.*/)) {
    pageTitle = 'ヘルプ'
  } else if (to.path && to.path.match(/\/features.*/)) {
    pageTitle = '機能紹介'
  }

  // 设置 title
  window.document.title = pageTitle
  try {
    window.jc.setPageTitle({pageTitle: pageTitle})
    window.jc.hideAllNonBaseMenuItem()
  } catch (e) {
    console.error(e)
  }

  router.app.$ba.trackPageview(to.path)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
