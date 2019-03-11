import Vue from 'vue'
import Vuex from 'vuex'

import banner from './banner/index';
import product from './product/index';
import blog from './blog/index';
import social from './social/index';
import cart from './cart/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner,
    product,
    blog,
    social,
    cart
  },
  state: {

  },
  mutations: {

  },
  actions: {
    async initialize({ dispatch }) {
      dispatch('banner/setMainBanners');
      dispatch('product/setBestProducts');
      dispatch('product/setFeaturedProducts');
      dispatch('banner/setMiddleBanners');
      dispatch('blog/setLatestArticles');
      dispatch('social/setInstaArticles');
    }
  }
});
