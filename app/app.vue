<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
</script>


<template>
  <header class="header">
        <hero/>
  </header>
  <main class="main">
    <section class="main__container">
          <welcome class="welcome"/>
    </section>
  </main>
  <footer class="footer">

  </footer>
</template>

<style lang="scss">
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

.main {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color:#f8eed6;;

  &__container {
    width: 80%;
  }
}
</style>
