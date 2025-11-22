<script setup>
import hero from '../components/hero.vue'
import welcome from '../components/welcome.vue'
import ccm from '../components/ccm.vue'
</script>


<template>
  <header class="header">
        <hero/>
  </header>
  <main class="main">
    <section class="fixed-background">
      <div class="fixed-background--first"></div>
    </section>

    <section class="main__container">
      <welcome/>
      <ccm/>
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
    background-color: rgba(211, 211, 211, 0.127);
    z-index: 90;
  }

  .fixed-background {

    &--first {
      width: 100%;
      position: absolute;
      height: 70vh;
      background-color: $lightestGreen;
      top: 60vh;
      left: 0;
      z-index: 0;
    }
  }
}
</style>
