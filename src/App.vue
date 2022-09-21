<template>
  <div id="app">
    <div class="homepage is-preload">
      <div id="page-wrapper">
        <section id="header">
          <HeaderCard/>
          <router-view/>
          
        </section>
        <FooterCard/>
      </div>
    </div>
  </div>
</template>

<script>

  import HeaderCard from './components/HeaderCard'
  import FooterCard from './components/FooterCard'
  
  export default {
    name: "App",
    components: {
      HeaderCard,
      FooterCard
    },
    data: () => ({
  
    }),
    methods: {
      
        
    },
  };
  
  </script>
<style>
@import url(./assets/css/fontawesome-all.min.css);
@import url(./assets/css/main.css);

</style>
