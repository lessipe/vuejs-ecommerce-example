<template>
  <div class="block1 hov-img-zoom pos-relative m-b-30">
    <img :src="image">

    <div class="block1-wrapbtn w-size2">
      <!-- Button -->
      <router-link to="/" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
        {{ linkText }}
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['image', 'link', 'linkText']
  };
</script>
