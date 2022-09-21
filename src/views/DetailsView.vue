<template>
  <!-- Main -->
    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-4 col-12-medium">
            <!-- Sidebar -->
              <section class="box left">
                <header>
                  <h3>Infos</h3>
                </header>
                <p> amiiboSeries: <b>{{amii.amiiboSeries}}</b> <br />
                  character: {{amii.character}}<br />
                  gameSeries: {{amii.gameSeries}}<br />
                  type:  {{amii.type}}
                </p>
              </section>

              <section class="box left">
                <header>
                  <h3>Dates sorties</h3>
                </header>
                <ul class="divided">
                  <li v-for="release,index in amii.release" :key="index">
                    {{index}} : {{release?release:'non determiné'}}
                  </li> 
                </ul>
              </section>
          </div>

          <div class="col-8 col-12-medium imp-medium">
            <!-- Content -->
            <article class="box post">
              <a href="#" class="featured"><img :src="amii.image" alt="" /></a>
              <header>
                <h2>{{amii.name}}</h2>
                <p>{{amii.type}}</p>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>


</template>
<script>
  import axios from 'axios'
  
  const API_AMII = 'https://www.amiiboapi.com/api/amiibo';
  
  export default {
    name: 'DetailsView',
    data:()=>({
      amii:[]
    }),
    methods: {

    },
    async created() {
    let {id}= this.$route.params;
    const req = await axios.get(API_AMII + '/?tail=' + id);
      this.amii=req.data.amiibo[0]
    },
      
    
  }
  </script>