import http from './http';

export default {
  async getLatestInstaArticles() {
    return http.get('api/insta-article-list.json');
  }
};
