import http from './http';

export default {
  async getLatestArticles() {
    return http.get('api/blog-article-list.json');
  }
};
