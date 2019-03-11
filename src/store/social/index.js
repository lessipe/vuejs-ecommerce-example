import instaApi from '@/api/insta';

export default {
  namespaced: true,
  state: {
    instaArticles: []
  },
  mutations: {
    setInstaArticles(state, articles) {
      state.instaArticles = [].concat(articles);
    }
  },
  actions: {
    async setInstaArticles({ commit }) {
      const response = await instaApi.getLatestInstaArticles();

      commit('setInstaArticles', response.data);
    }
  }
};
