<script setup>
import Hero from '../../components/Hero.vue';
import Welcome from '../../components/Welcome.vue';
import Treatments from '../../components/Treatments.vue';
import Description from '../../components/Description.vue';
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
    header: "Velkommen til min klinik - Beliggende i hjertet af Nordjylland!",
    text: "Hos Klinik Egernbo Akupunktur tilbyder vi professionel akupunktur baseret på klassisk kinesisk medicin. Klinikken er beliggende i Aabybro og hjælper klienter fra hele Nordjylland med både fysiske og mentale ubalancer i rolige og trygge omgivelser. Vores tilgang er helhedsorienteret og tager udgangspunkt i det enkelte menneske frem for kun symptomerne."
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
            <NuxtLink to="/kontakt"><p class="contact_link">Kontakt mig her!</p></NuxtLink>
            <Gallery />
            <FAQ />
        </section>
    </main>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

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

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center; 
        width: 100%;  

        .contact_link {
            margin-top: 50px;
            width: 100%;
            padding: 10px 50px;
            background-color: $green;
            border-radius: 20px;

            color: black;
            text-align: center;
            box-shadow: 0 0 10px 5px #00000030;
        
            &:hover {
                cursor: pointer;
            }

            //large screens
            @media (min-width: 1200px) {
                width: 40%;
            };
        }
    }
  }
}
</style>