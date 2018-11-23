<template>
  <div  class="container" id="app">
    <SourceSelection @:sourceChanged ="sourceChanged"></SourceSelection>
    <NewsFeed v-bind:source="source"></NewsFeed>
    
  </div>
</template>



<script>
import SourceSelection from './components/SourceSelection'
import NewsFeed from './components/NewsFeed'

export default {
  name: 'App',
  components: {
    SourceSelection,
    NewsFeed
    
  },
  data () {
  return{
    source:""
        }

    },
    methods:{
      sourcechanged:function(source){
        this.source=source;
      }
    }
}

</script>

<style>
#app {
  padding-top: 40px
}

</style>
