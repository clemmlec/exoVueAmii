<template>
  <div class="home">
    <!-- Banner -->
    <section id="banner">
      <header>
        <h2>Hey.Bienvenue sur ma collection</h2>
      </header>
    </section>

    <!-- Intro -->
    <section id="intro" class="container">
      <div class="row">
        <div class="col-4 col-12-medium" v-for="amii in result" :key="amii.tail">
          <section class="middle" >
            <img  @click="gotToDetails(amii.tail)" class="pointer" :src="amii.image" />
            <header>
              <h2>{{amii.character}}</h2>
            </header>
            <p>{{amii.gameSeries}}</p>
          </section>
        </div>
      </div>
      <footer>
        <ul class="actions">
          <li><router-link to="/liste" class="button large">Liste Amiibo</router-link></li>
        </ul>
      </footer>
    </section>

  </div>
</template>

<script>

import axios from 'axios'
  
  const API_AMII = 'https://www.amiiboapi.com/api/amiibo/?type=Figure';

export default {
  name: 'HomeView',
  data:()=>({
      result:[]
    }),
  
    methods:{
      async getAmii(){
        const req = await axios.get(API_AMII);
        this.result=req.data.amiibo
        let x = Math.random()*this.result.length
        this.result = this.result.slice(x,x+3)
      },
      gotToDetails(id){
        this.$router.push({name:'details', params:{id:id}})
      }
    },
    async created() {
      await this.getAmii()
    },
}
</script>
