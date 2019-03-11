<template>
  <section class="bgwhite p-t-40 p-b-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <template v-for="item in firstColumn">
            <best-product-part
              :image="item.image"
              :link="item.link"
              :linkText="item.linkText"
            />
          </template>
        </div>
        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <template v-for="item in secondColumn">
            <best-product-part
              :image="item.image"
              :link="item.link"
              :linkText="item.linkText"
            />
          </template>
        </div>
        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <template v-for="item in thirdColumn">
            <best-product-part
              :image="item.image"
              :link="item.link"
              :linkText="item.linkText"
            />
          </template>
          <signup-promotion-part />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapState } from 'vuex';
  import BestProductPart from '@/parts/home/BestProduct.vue';
  import SignupPromotionPart from '@/parts/home/SignupPromotion.vue';

  export default {
    data() {
      return {
      };
    },
    computed: {
      firstColumn() {
        if (this.bestProducts.length > 0) {
          return this.bestProducts[0];
        }

        return [];
      },
      secondColumn() {
        if (this.bestProducts.length > 1) {
          return this.bestProducts[1];
        }

        return [];
      },
      thirdColumn() {
        if (this.bestProducts.length > 2) {
          return this.bestProducts[2];
        }

        return [];
      },
      ...mapState('product', {
        bestProducts: state => state.bestProducts
      })
    },
    components: {
      BestProductPart,
      SignupPromotionPart
    }
  };
</script>
