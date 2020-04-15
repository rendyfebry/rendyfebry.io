// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueHighcharts from 'vue-highcharts'
import VueAnalytics from 'vue-analytics';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/global.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
	id: 'UA-163693676-1',
	router,
})

Vue.use(BootstrapVue)
Vue.use(VueHighcharts)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
})
