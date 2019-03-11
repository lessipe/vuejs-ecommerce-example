import bannerApi from '@/api/banner';
import moment from 'moment';

export default {
  namespaced: true,
  state: {
    mainBanners: [],
    middleBanners: []
  },
  mutations: {
    setMainBanners(state, banners) {
      state.mainBanners = [].concat(banners);
    },
    setMiddleBanners(state, banners) {
      state.middleBanners = [].concat(banners.map(banner => {
        if (banner.type === 'countdown') {
          banner.countdown = moment(banner.expireTime, 'YYYY-MM-DD hh:mm:ss');
        }

        return banner;
      }));
    }
  },
  actions: {
    async setMainBanners({ commit }) {
      const response = await bannerApi.getMainSlideBanners();

      commit('setMainBanners', response.data);
    },
    async setMiddleBanners({ commit }) {
      const response = await bannerApi.getMiddleBanners();

      commit('setMiddleBanners', response.data);
    }
  }
};
