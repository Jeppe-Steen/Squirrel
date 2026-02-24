<script setup>
import Hero from '../../components/Hero.vue';
import Welcome from '../../components/Welcome.vue';
import Description from '../../components/Description.vue';
import FAQ from '../../components/FAQ.vue';
import Reviews from '../../components/Reviews.vue';


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
    <main class="main">
        <section class="main__container">
            <Welcome :text="welcomeText"/>
            <div class="link">
                <NuxtLink class="test" to="/behandlinger"><h3>Se hvilke behandlinger jeg tilbyder her</h3></NuxtLink>
            </div>
            <div class="link">
                <NuxtLink to="/priser"><h3>Se priser her</h3></NuxtLink>
            </div>
            <Reviews />
            <div class="link">
                <NuxtLink to="/anmeldelser"><h3>Læs flere anmeldelser her</h3></NuxtLink>
            </div>
            <Description />
            <div class="link">
                <NuxtLink to="/kontakt"><h3>Kontakt mig her!</h3></NuxtLink>
            </div>
            <FAQ />
        </section>
    </main>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.main {
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