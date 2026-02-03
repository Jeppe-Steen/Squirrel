<script setup>
    import Hero from '../../components/Hero.vue';
    import Welcome from '../../components/Welcome.vue';
    import Treatments from '../../components/Treatments.vue';
    import Description from '../../components/Description.vue';
    import Contact from '../../components/Contact.vue';
    import Gallery from '../../components/Gallery.vue';
    import FAQ from '../../components/FAQ.vue';


    useHead({
        title: "Akupunktur i Aabybro | Klinik Egernbo Akupunktur - Nordjylland",
        meta: [
            {
                name: "description",
                content: "Professionel akupunktør i Aabybro og Nordjylland. Helhedsorienteret behandling mod smerter, stress og ubalance",
            }
        ]
    });
</script>

<template>
    <header>
        <Hero />
    </header>

    <main class="main">

        <section class="main__container">
            <Welcome/>
            <Treatments />
            <Description />
            <Gallery />
            <Contact />
            <FAQ />
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