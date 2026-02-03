<script setup>
import Hero from '../../components/Hero.vue';
import Personaldata from '../../components/personaldata.vue';
import Agreements from '../../components/agreements.vue';
import Conditions from '../../components/conditions.vue';
</script>

<template>
    <main class="main">
        <header><Hero /></header>

        <section class="main__container">
            <Personaldata />
            <Agreements />
            <Conditions />
        </section>
    </main>
</template>


<style lang="scss">
header {
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
}
</style>