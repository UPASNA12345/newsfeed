<template>
  <div class="NewsFeed">
    <div class="container">
      <ul class="media-list">
        <li class="media" v-bind:key="article in articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'newsfeed',
  props: ['source'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=c3aa102403614b73ba9367b8c54f2d34')
       .then(response => {
         this.articles = response.data.articles;
       });   
    }
  },
  created: function () {
    this.updateSource(this.source);
  },
  watch: {
    source: function (val) {
      this.updateSource(val);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .media-object {
    width: 130px;
    padding: 15px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
</style>