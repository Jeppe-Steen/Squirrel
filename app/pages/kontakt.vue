<script setup>
import Hero from '../../components/Hero.vue';
import Contact from '../../components/Contact.vue';
useHead({
    title: 'Kontakt',
    meta: [
        {
            name: 'description',
            content: 'Her finder du kontaktinformationer og hvordan du kan nå klinikken.'
        },
        {
          name: "color-scheme",
          content: "light"
        }
    ]
});
</script>

<template>
   <main class="contact">
        <section class="contact__container">
            <Contact />
        </section>
    </main>
</template>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;

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