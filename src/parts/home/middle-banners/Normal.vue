<template>
  <div class="hov-img-zoom pos-relative">
    <img :src="image" alt="IMG-BANNER">

    <div class="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
      <span class="m-text9 p-t-45 fs-20-sm">
        {{ subTitle }}
      </span>

      <h3 class="l-text1 fs-35-sm">
        {{ title }}
      </h3>

      <router-link to="/" class="s-text4 hov2 p-t-20">
        {{ linkText }}
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['image', 'title', 'subTitle', 'link', 'linkText']
  };
</script>
