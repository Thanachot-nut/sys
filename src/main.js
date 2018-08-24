// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/css/materialize.css'
import '../node_modules/materialize-css/dist/js/materialize'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUser, faKey, faSearch, faPlus, faStop, faTerminal, faTag, faCheck, faBan, faInfo, faPen, faSignature, faUnlock, faPhone, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faUser)
library.add(faStop)
library.add(faKey)
library.add(faCoffee)
library.add(faPlus)
library.add(faTerminal)
library.add(faTag)
library.add(faCheck)
library.add(faBan)
library.add(faInfo)
library.add(faPen)
library.add(faSignature)
library.add(faUnlock)
library.add(faPhone)
library.add(faChevronLeft)
library.add(faChevronRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
