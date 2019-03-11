<template>
  <section class="banner2 bg5 p-t-55 p-b-55">
    <div class="container">
      <div class="row">
        <template v-for="banner in banners">
          <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
            <normal-banner
              v-if="banner.type === 'normal'"
              :image="banner.image"
              :title="banner.title"
              :subTitle="banner.subTitle"
              :link="banner.link"
              :linkText="banner.linkText"
            />
            <count-down-banner
              v-if="banner.type === 'countdown'"
              :image="banner.image"
              :title="banner.title"
              :price="banner.price"
              :discount="banner.discountPrice"
              :countdown="banner.countdown"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapState } from 'vuex';

  import NormalBanner from '@/parts/home/middle-banners/Normal.vue';
  import CountDownBanner from '@/parts/home/middle-banners/Countdown.vue';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState('banner', {
        banners: state => state.middleBanners
      })
    },
    components: {
      NormalBanner,
      CountDownBanner
    }
  };
</script>
