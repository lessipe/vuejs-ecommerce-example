import http from './http';

export default {
  async getMainSlideBanners() {
    return http.get('api/banners.json');
  },
  async getMiddleBanners() {
    return http.get('api/middle-banner.json');
  }
};
