<script setup>
import Hero from '../../components/Hero.vue';
import Personaldata from '../../components/Personaldata.vue';
import Agreements from '../../components/Agreements.vue';
import Conditions from '../../components/Conditions.vue';
useHead({
    title: 'Betingelser',
    meta: [
        {
            name: 'description',
            content: 'Her finder du betingelser og privatlivspolitik.'
        },
        {
          name: "color-scheme",
          content: "light"
        }
    ]
});
</script>

<template>
    <main class="agreements">
        <section class="agreements__container">
            <Personaldata />
            <Agreements />
            <Conditions />
        </section>
    </main>
</template>


<style lang="scss" scoped>

.agreements {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;

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