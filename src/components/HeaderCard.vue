<template>
    <section>
      <!-- Logo -->
      <h1><a href="index.html">AmiiVue</a></h1>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li id="1" class="current" @click="changeClass(1)"><router-link to="/">Home</router-link></li>
          <li id="2" @click="changeClass(2)"><router-link to="/liste" >Liste Amiibo</router-link></li>
        </ul>
      </nav>
    </section>
</template>

<script>
export default {
  name: 'HeaderCard',
  methods: {
    changeClass(x){
      let home = document.getElementById('1')
      let liste = document.getElementById('2')
      if(x=='1'){
        home.classList.add('current')
        liste.classList.remove('current')
      }else{
        liste.classList.add('current')
        home.classList.remove('current')
      }
    }
  },

}
</script>
