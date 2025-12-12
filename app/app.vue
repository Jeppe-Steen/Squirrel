<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
import treatments from '../components/treatments.vue'
import description from '../components/description.vue'
import personaldata from '../components/personaldata.vue'
import agreements from '../components/agreements.vue'

import { ref } from 'vue';

const active = ref(false)


onMounted(() => {
  window.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
      active.value = true;
      return;
    }

    active.value = false;
    return;

  })
})
</script>


<template>
  <nav :class="{'scrolled': active}">
    <ul>
      <li><a href="#behandlinger">Behandlinger</a></li>
      <li><a href="#">Priser</a></li>
      <li><a href="#">Anmeldelser</a></li>
      <li><a href="#">Kontakt</a></li>
      <li><a href="#">FAQ</a></li>
    </ul>
  </nav>

  <header class="header">
        <hero/>
  </header>

  <main class="main">
    <section class="fixed-background">
      <div class="first"></div>
    </section>

    <section class="main__container">
      <welcome/>
      <treatments/>
      <description/>
      <personaldata />
      <agreements />
    </section>
  </main>

  <footer class="footer">
  </footer>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open sans', sans-serif;
}

nav {
  position:fixed;
  top: 0;
  width: 100%;
  height: 60px;
  // background-color: rgba(255, 255, 255, 0.347);
  z-index: 999;

  display: flex;
  align-items: center;
  padding: 0 100px;

  &.scrolled {
    background-color: $darkGreen;
    box-shadow: 0 2px 6px #00000030;
  }
  
  &:hover {
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    font-weight: bold;

    li {
      &:hover {
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: 50px;
      }

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
}

h4 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
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

  &__container {
    width: 100%;
    min-height: 1000px;
    height: fit-content;
    background-color: transparent;
    z-index: 90;
    
    @media (min-width: 1200px) {  width: 60%; };
  }

  .fixed-background {
    height:max-content;

    .first{
      width: 100%;
      position: absolute;
      height: 120vh;
      background-color: $lightestGreen;
      top: 50vh;
      left: 0;
      z-index: 0;

      // large screens
      @media (min-width: 1200px) {
        height: 45vh;
        top: 60vh;
      };
    }
  }
}

footer {
  height: 20vh;
  background-color: $lightGreen;
  margin-top: 50px;
  width: 100%;
}
</style>
