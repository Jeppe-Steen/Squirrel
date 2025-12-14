<script setup>
import hero from '../components/hero.vue';
import welcome from '../components/welcome.vue';
import treatments from '../components/treatments.vue';
import description from '../components/description.vue';
import personaldata from '../components/personaldata.vue';
import agreements from '../components/agreements.vue';
import gallery from '../components/gallery.vue';
import prices from '../components/prices.vue';
import about from '../components/about.vue';
import contact from '../components/contact.vue';
import FAQ from '../components/FAQ.vue';

import { ref, useHead } from 'vue';

const title = ref('Klinik Egernbo Akupunktur')
const description = ref('Velkommen til klinik Egernbo. Har du gået med tanken om at prøve akupunktur, enten af ren nygerighed, eller i håbet om en alternativ vej til at få det bedre fysisk eller mentalt? Så læs endeligt videre, du er kommet til det rette sted. Som en af de få i Nordjylland der er uddannet indenfor CCM, den originale tilgang til akupunktur, tilbyder jeg en holistisk tilgang til mine klienter, hvor man ikke bare symptombehandler, men tager udgangspunkt i det hele menneske, for at kunne behandle roden til de sygdomme der er opstået. En metode der fandtes før den vestlige tilgang til behandlinger opstod.')
useHead({
  title,
  meta: [{
    name: 'description',
    content: description,
  }],
})



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
      <li><a href="#priser">Priser</a></li>
      <!-- <li><a href="#">Anmeldelser</a></li> -->
      <li><a href="#kontakt">Kontakt</a></li>
      <li><a href="#FAQ">FAQ</a></li>
    </ul>
  </nav>

  <header class="header">
        <hero/>
  </header>

  <main class="main">
    <section class="fixed-background">
      <div class="first"></div>
      <div class="secound"></div>
    </section>

    <section class="main__container">
      <welcome/>
      <treatments/>
      <description/>
      <gallery/>
      <prices/>
      <about/>
      <contact/>
      <FAQ />
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
  scroll-behavior: smooth;
}

nav {
  display: none;
  position:fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 999;

  align-items: center;
  padding: 0 100px;

  // large screens
  @media (min-width: 1200px) {  display: flex; };

  &.scrolled {
    background-color: $darkGreen;
    box-shadow: 0 0 10px 5px #00000030;
    a {
      color:white;
    }
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
    padding: 0 20px;
    
    // large screens
    @media (min-width: 1200px) {  width: 60%; padding: unset; };
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

    .secound{
      width: 100%;
      position: absolute;
      height: 120vh;
      background-color: $lightestGreen;
      top: 4950px;
      left: 0;
      z-index: 0;

      // large screens
      @media (min-width: 1200px) {
        height: 80vh;
        top: 2500px;
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
