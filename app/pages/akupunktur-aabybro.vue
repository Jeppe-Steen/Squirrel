<script setup>
    import Hero from '../../components/Hero.vue';
    import Welcome from '../../components/Welcome.vue';
    import Treatments from '../../components/Treatments.vue';
    import Description from '../../components/Description.vue';
    import Contact from '../../components/Contact.vue';
    import Gallery from '../../components/Gallery.vue';
    import FAQ from '../../components/FAQ.vue';


    useHead({
        title: "Akupunktur i Aabybro | Lokal akupunktør",
        meta: [
            {
                name: "description",
                content: "Søger du akupunktur i Aabybro? Klinik Egernbo tilbyder professionel akupunktur med fokus på krop og sind.",
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
        header: "Akupunktur i Aabybro",
        text: "Søger du professionel akupunktur i Aabybro? Hos Klinik Egernbo Akupunktur tilbyder vi behandlinger baseret på klassisk kinesisk medicin med fokus på balance, ro og årsagsbehandling. Klinikken ligger i Aabybro og er et oplagt valg for dig, der ønsker en nærværende og personlig behandling uden stress og hast. Mange vælger akupunktur i Aabybro som et alternativ eller supplement til konventionel behandling – særligt ved længerevarende smerter, stress, søvnproblemer eller spændingstilstande."
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