<script setup>
import Hero from '../../components/Hero.vue';
import Welcome from '../../components/Welcome.vue';
import Treatments from '../../components/Treatments.vue';
import Description from '../../components/Description.vue';
import Gallery from '../../components/Gallery.vue';
import FAQ from '../../components/FAQ.vue';


useHead({
    title: "Akupunktur i Aabybro | Klinik Egernbo Akupunktur – Nordjylland",
    meta: [
        {
            name: "description",
            content: "Professionel akupunktur i Aabybro & Nordjylland med helhedsorienteret behandling mod smerter, stress og ubalance. Book tid i dag.",
        },
        {
          name: "color-scheme",
          content: "light"
        },
         {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)"
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
    header: "Velkommen til Klinik Egernbo Akupunktur – din lokale akupunktør i Aabybro.",
    text: [
      "Hos os får du professionel, individuel behandling gennem klassisk kinesisk medicin (CCM), hvor vi arbejder med kroppen som en helhed for at skabe balance og lindring.",
      "Akupunktur i Aabybro og Nordjylland hjælper mod en lang række ubalancer og symptomer – fra stress og uro til muskelsmerter, spændinger og søvnproblemer. Vores tilgang er holistisk, og hver behandling tilpasses dine behov, så du både oplever øjeblikkelig afspænding og langvarig forbedring.",
      "Vi tilbyder akupunktur, moxa, auriculoterapi, TENS og cupping, alle med fokus på professionalisme, tryghed og resultater."
    ]
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