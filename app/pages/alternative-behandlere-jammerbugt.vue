<script setup>
    import Hero from '../../components/Hero.vue';
    import Welcome from '../../components/Welcome.vue';
    import Treatments from '../../components/Treatments.vue';
    import Description from '../../components/Description.vue';
    import Contact from '../../components/Contact.vue';
    import Gallery from '../../components/Gallery.vue';
    import FAQ from '../../components/FAQ.vue';


    useHead({
        title: "Alternative behandlere i Jammerbugt | Akupunktur",
        meta: [
            {
                name: "description",
                content: "Alternative behandlere i Jammerbugt – professionel akupunktur og helhedsorienteret behandling i Aabybro.",
            }
        ],
        script: [
            {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "Klinik Egernbo Akupunktur",
                "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sandmosevej 11",
                "addressLocality": "Aabybro",
                "postalCode": "9440",
                "addressCountry": "DK"
                }
            })
            }
        ]
    });
    
    const welcomeText = {
        header: "Alternative behandlere i Jammerbugt",
        text: "Alternative behandlere i Jammerbugt arbejder med kroppen som helhed. Hos Klinik Egernbo Akupunktur tilbyder vi akupunktur og andre alternative behandlingsformer, der understøtter kroppens naturlige balance og selvhelbredende evner. Mange vælger alternative behandlere som supplement eller alternativ til traditionel behandling – særligt ved kroniske eller tilbagevendende problemstillinger."
    };  

</script>

<template>
    <header>
        <Hero />
    </header>

    <main class="main">

        <section class="main__container">
            <Welcome :text="welcomeText"/>
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