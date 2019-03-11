import blogApi from '@/api/blog';
import moment from 'moment';

export default {
  namespaced: true,
  state: {
    latestArticles: []
  },
  mutations: {
    setLatestArticles(state, articles) {
      state.latestArticles = [].concat(articles.map(article => {
        article.createdAt = moment(article.createdAt, 'YYYY-MM-DD hh:mm:ss');

        return article;
      }));
    }
  },
  actions: {
    async setLatestArticles({ commit }) {
      const response = await blogApi.getLatestArticles();

      commit('setLatestArticles', response.data);
    }
  }
};
