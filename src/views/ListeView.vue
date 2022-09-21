<template>
  <!-- Main -->
  <section id="main">
    <div class="container">
      <!-- Content -->
      <article class="box post">
        <header>
          <h2>Ma Collection</h2>
          <p>{{result.length}} ammibo</p>
        </header>
        <p>
          <table>
            <tr>
              <th>Character</th>
              <th>game Series</th>
              <th>Action</th>
            </tr>
            <tr v-for="amii in result" :key="amii.tail">
              <td>{{amii.character}}</td>
              <td>{{amii.gameSeries}}</td>
              <td><button @click="gotToDetails(amii.tail)">👀</button></td>
          </tr>
          </table>
        </p>
        
      </article>
    </div>
  </section>

</template>
<script>
  import axios from 'axios'
  
  const API_AMII = 'https://www.amiiboapi.com/api/amiibo/';
  
  export default {
    name: 'ListeView',
    data:()=>({
      result:[]
    }),
  
    methods:{
      async getAmii(){
        const req = await axios.get(API_AMII);
        this.result=req.data.amiibo
  
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