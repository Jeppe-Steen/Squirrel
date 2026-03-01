<script setup>
import Welcome from '../../components/Welcome.vue';
import Description from '../../components/Description.vue';
import FAQ from '../../components/FAQ.vue';
import Reviews from '../../components/Reviews.vue';
import Gallery from '../../components/Gallery.vue';


useHead({
    title: "Akupunktur i Aabybro | Klinik Egernbo Akupunktur – Nordjylland",
    link: [
        {
            rel: "canonical",
            href: "https://klinikegernboakupunktur.dk/"
        }
    ],
    script: [
        {
            type: "application/ld+json",
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalBusiness",
                "name": "Klinik Egernbo Akupunktur",
                "url": "https://klinikegernboakupunktur.dk/",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sandmosevej 11",
                    "addressLocality": "Aabybro",
                    "postalCode": "9440",
                    "addressCountry": "DK"
                },
            })
        }
    ],
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
});

const welcomeText = {
    header: "Velkommen til Klinik Egernbo Akupunktur",
    subheader: "Din lokale akupunktør i Aabybro.",
    text: [
      "Hos mig får du professionel, individuel behandling gennem klassisk kinesisk medicin (CCM), hvor vi arbejder med kroppen som en helhed for at skabe balance og lindring.",
      "Akupunktur hjælper mod en lang række ubalancer og symptomer – fra stress og uro til muskelsmerter, spændinger og søvnproblemer. Min tilgang er holistisk, og hver behandling tilpasses dine behov, så du både oplever øjeblikkelig afspænding og langvarig forbedring.",
      "Jeg tilbyder akupunktur, moxa, auriculoterapi, TENS og cupping, alle med fokus på professionalisme, tryghed og resultater."
    ]
};

</script>

<template>
    <main class="frontpage">
        <section class="frontpage__container">
            <Welcome :text="welcomeText"/>
            <div class="link">
                <NuxtLink class="test" to="/behandlinger"><h3>Se hvilke behandlinger jeg tilbyder her</h3></NuxtLink>
            </div>
            <div class="link">
                <NuxtLink to="/priser"><h3>Se priser her</h3></NuxtLink>
            </div>
            <Reviews />
            <!-- <div class="link">
                <NuxtLink to="/anmeldelser"><h3>Læs flere anmeldelser her</h3></NuxtLink>
            </div> -->
            <Description />
            <div class="link">
                <NuxtLink to="/kontakt"><h3>Kontakt mig her!</h3></NuxtLink>
            </div>
            <Gallery />
            <FAQ />
        </section>
    </main>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.frontpage {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  background-color: white;

    @media (prefers-color-scheme: dark) {
        background: white;
    }


  &__container {
    width: 100%;
    min-height: 1000px;
    height: fit-content;
    background-color: transparent;
    z-index: 90;
    padding: 0 20px;
    
    // large screens
    @media (min-width: 1200px) {  width: 60%; padding: unset; };

    .link {
        width: 100%;
        background-color: $green;
        margin: 15px 0;

        a {
            text-align: center;
            color: black;
            text-decoration: none;
            width: 100%;
            height: 100%;
            
            h3 {
                font-weight: 500;
                padding: 20px 0;
            }
        }
    }
  }
}
</style>