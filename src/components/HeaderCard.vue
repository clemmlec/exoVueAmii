<template>
    <section>
      <!-- Logo -->
      <h1><a href="index.html">AmiiVue</a></h1>

      <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current"><router-link to="/">Home</router-link></li>

          <li><router-link to="/liste">Liste Amiibo</router-link></li>

    
        </ul>
      </nav>
    </section>
</template>

<script>
export default {
  name: 'HeaderCard',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
