import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './bootstrap';

Vue.config.productionTip = false

Vue.filter('leadingZero', function(value, begin, end) {
  if (value < 10) {
    return `0${value}`;
  }

  return value;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
