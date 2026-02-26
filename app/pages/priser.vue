<script setup>
import Hero from '../../components/Hero.vue';
import Prices from '../../components/Prices.vue';

useHead({
    title: 'Priser',
    meta: [
        {
            name: 'description',
            content: 'Her finder du priser på alle de behandlinger jeg tilbyder.'
        },
        {
          name: "color-scheme",
          content: "light"
        }
    ]
});
</script>

<template>
   <main class="prices">
        <section class="prices__container">
            <Prices />
        </section>
    </main>
</template>

<style lang="scss" scoped>
.prices {
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