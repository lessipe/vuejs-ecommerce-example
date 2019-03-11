<template>
  <div class="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
    <img :src="image" alt="IMG-BANNER">

    <div class="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
      <div class="t-center">
        <router-link to="/" class="dis-block s-text3 p-b-5">
          {{ title }}
        </router-link>

        <span class="block2-oldprice m-text7 p-r-5">
          ${{ price }}
        </span>

        <span class="block2-newprice m-text8">
          ${{ discount }}
        </span>
      </div>

      <div class="flex-c-m p-t-44 p-t-30-xl">
        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 days">
          </span>

          <span class="s-text5">
            days
          </span>
        </div>

        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 hours">
          </span>

          <span class="s-text5">
            hrs
          </span>
        </div>

        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 minutes">
          </span>

          <span class="s-text5">
            mins
          </span>
        </div>

        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 seconds">
          </span>

          <span class="s-text5">
            secs
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment';

  export default {
    props: ['image', 'title', 'price', 'discount', 'countdown'],
    data() {
      return {
      };
    },
    mounted() {
      this.$nextTick(() => {
        $.countdown(new Date(this.countdown.valueOf()));
      });
    }
  };
</script>
