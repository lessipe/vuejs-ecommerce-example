<template>
  <div>
    <slide-banner />
    <best-product-list />
    <featured-product-list />
    <middle-banner />
    <blog-article-list />
    <insta-article-list />
    <section class="shipping bgwhite p-t-62 p-b-46">
      <div class="flex-w p-l-15 p-r-15">
        <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
          <h4 class="m-text12 t-center">
            Free Delivery Worldwide
          </h4>

          <router-link to="/" class="s-text11 t-center">
            Click here for more info
          </router-link>
        </div>

        <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 bo2 respon2">
          <h4 class="m-text12 t-center">
            30 Days Return
          </h4>

          <span class="s-text11 t-center">
            Simply return it within 30 days for an exchange.
          </span>
        </div>

        <div class="flex-col-c w-size5 p-l-15 p-r-15 p-t-16 p-b-15 respon1">
          <h4 class="m-text12 t-center">
            Store Opening
          </h4>

          <span class="s-text11 t-center">
            Shop open from Monday to Sunday
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SlideBanner from '@/components/home/SlideBanner.vue';
import BestProductList from '@/components/home/BestProductList.vue';
import FeaturedProductList from '@/components/home/FeaturedProductList.vue';
import MiddleBanner from '@/components/home/MiddleBanner.vue';
import BlogArticleList from '@/components/home/BlogArticleList.vue';
import InstaArticleList from '@/components/home/InstaArticleList.vue';

export default {
  name: 'home',
  components: {
    SlideBanner,
    BestProductList,
    FeaturedProductList,
    MiddleBanner,
    BlogArticleList,
    InstaArticleList
  }
}
</script>
