import http from './http';

export default {
  async getBestProducts() {
    return http.get('api/best-product-list.json');
  },
  async getFeaturedProducts() {
    return http.get('api/featured-product-list.json');
  }
}
