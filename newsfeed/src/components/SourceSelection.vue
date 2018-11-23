<template>
    <div class="sourceselection">
        <div class="jumbotron">

            <h2><span class="glyphicon glyphicon-list-alt" style="color:white"></span> News Feed</h2>
            <h4>Select News channel</h4>
            <select class="form-control"  v-on:change="sourceChanged">
             <option v-bind:key="source.name" v-for="source in sources">{{source.name}}</option>
            </select>
            <div v-if="source">
                <h6>{{source.description}}</h6>
                <a v-bind:href="source.url" class="btn btn-primary" target="_blank">Go To {{source.name}} Website </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'sourceselection',
    data() {
        return{    
          sources: [],
        source: ''
        
        }
    },
   methods: {
    sourceChanged: function(e) {
        console.log("i n chnnng"+this.sources.length);
     for (var i=0; i<this.sources.length; i++) {
         console.log(this.sources[i]);
        //    console.log(this.sources[i].name.toLowerCase());
        //    console.log(e.target.value.toLowerCase());
           console.log(this.sources[i].name.toLowerCase()==e.target.value.toLowerCase());
       if (this.sources[i].name.toLowerCase() == e.target.value.toLowerCase()) {
           console.log("inside if");
           console.log(this.sources[i].name);
           console.log(e.target.value);
         this.source = this.sources[i];
       }
     }
     this.$emit('sourceChanged', e.target.value);
    }
  },
  created: function () {
    this.$http.get('https://newsapi.org/v1/sources?language=en')
      .then(response => {
        this.sources = response.data.sources;
      });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
    margin-bottom: 0px;
    background-color: #b91e2d;
    
    color: white;
    
}
</style>
The template imp
