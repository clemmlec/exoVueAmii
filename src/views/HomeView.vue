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
        <MignatureCard v-for="amii in result" 
          :key="amii.tail"
          :tail="amii.tail"
          :character="amii.character"
          :gameSeries="amii.gameSeries"
          :image="amii.image"
        />
        
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
import MignatureCard from '@/components/MignatureCard.vue';  
  const API_AMII = 'https://www.amiiboapi.com/api/amiibo/?type=Figure';

export default {
  name: 'HomeView',
  components: {
    MignatureCard
  },
  data:()=>({
      result:[],
      
    }),
  
    methods:{
      async getAmii(){
        const req = await axios.get(API_AMII);
        this.result=req.data.amiibo
        let x = parseInt(Math.random()*(this.result.length-3))
        this.result = this.result.slice(x,x+3)
      },
    },
    async created() {
      await this.getAmii()
    },
}
</script>
