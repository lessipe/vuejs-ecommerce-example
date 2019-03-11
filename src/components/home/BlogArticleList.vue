<template>
  <section class="blog bgwhite p-t-94 p-b-65">
    <div class="container">
      <div class="sec-title p-b-52">
        <h3 class="m-text5 t-center">
          Our Blog
        </h3>
      </div>

      <div class="row">
        <template v-for="article in articles">
          <div class="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
            <div class="block3">
              <a href="blog-detail.html" class="block3-img dis-block hov-img-zoom">
                <img :src="article.image" alt="IMG-BLOG">
              </a>

              <div class="block3-txt p-t-14">
                <h4 class="p-b-7">
                  <router-link to="/" class="m-text11">
                    {{ article.title }}
                  </router-link>
                </h4>

                <span class="s-text6">By</span>&nbsp;<span class="s-text7">{{ article.author }}</span>&nbsp;
                <span class="s-text6">on</span>&nbsp;<span class="s-text7">{{ article.createdAt.format('YYYY-MM-DD') }}</span>

                <p class="s-text8 p-t-16">
                  {{ article.content }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState('blog', {
        articles: state => state.latestArticles
      })
    }
  };
</script>
