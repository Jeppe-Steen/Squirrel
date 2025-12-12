<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
import ccm from '../components/ccm.vue'
import treatments from '../components/treatments.vue'
import description from '../components/description.vue'
import prices from '../components/prices.vue'
import slideshow from '../components/slideshow.vue'
import about from '../components/about.vue'
import personaldata from '../components/personaldata.vue'
import agreements from '../components/agreements.vue'
</script>


<template>
  <header class="header">
        <hero/>
  </header>

  <main class="main">
    <section class="fixed-background">
      <div class="first"></div>
    </section>

    <section class="main__container">
      <welcome/>
      <ccm/>
      <treatments/>
      <description/>
      <!-- <prices/> -->
      <!-- <slideshow/> -->
      <about/>
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
        height: 75vh;
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
