<script setup>
import Hero from '../../components/Hero.vue';
import About from '../../components/About.vue';
useHead({
    title: 'Om klinikken',
    meta: [
        {
            name: 'description',
            content: 'Her finder du information om mig og klinikken.'
        },
        {
          name: "color-scheme",
          content: "light"
        }
    ]
});
</script>

<template>
    <main class="about">
        <section class="about__container">
            <About />
        </section>
    </main>
</template>


<style lang="scss" scoped>
.about {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
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