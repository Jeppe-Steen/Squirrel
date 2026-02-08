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
            },
            {
                name: "color-scheme",
                content: "light"
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
        header: "Alternative behandlere i Nordjylland",
        text: "Alternative behandlingsformer i Nordjylland anvendes af mange, der ønsker en mere helhedsorienteret tilgang til sundhed. Klinik Egernbo Akupunktur tilbyder akupunktur som en central behandlingsform med fokus på både fysiske og mentale ubalancer."
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