<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
import ccm from '../components/ccm.vue'
import treatments from '../components/treatments.vue'
</script>


<template>
  <header class="header">
        <hero/>
  </header>
  <main class="main">
    <section class="fixed-background">
      <div></div>
    </section>

    <section class="main__container">
      <welcome/>
      <ccm/>
      <treatments/>
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
    width: 60%;
    min-height: 1000px;
    height: fit-content;
    // background-color: rgba(211, 211, 211, 0.127);
    background-color: transparent;
    z-index: 90;
  }

  .fixed-background {

    &:nth-child(1){
      width: 100%;
      position: absolute;
      height: 60vh;
      background-color: $lightestGreen;
      top: 60vh;
      left: 0;
      z-index: 0;
    }
  }
}
</style>
