<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
import treatments from '../components/treatments.vue'
</script>


<template>
  <header class="header">
        <hero/>
  </header>
  <main class="main">
    <welcome class="welcome"/>
  </main>
  <footer class="footer">

  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open sans', sans-serif;
}

.header {
  width: 100%;
  height: fit-content;
}

.main{
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
</style>
