<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
</script>


<template>
  <main class="main_app">
    <hero/>
    <welcome/>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open sans', sans-serif;
}

.main_app {
  width: 100%;
  height: fit-content;
}
</style>
