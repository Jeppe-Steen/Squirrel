<script setup>
import Hero from '../../components/Hero.vue';
import Treatment from '../../components/reuseable/Treatment.vue';

useHead({
    title: 'Behandlinger',
    meta: [
        {
            name: 'description',
            content: 'Her finder du en oversigt over de behandlinger jeg tilbyder.'
        },
        {
          name: "color-scheme",
          content: "light"
        }
    ]
});

const treatments = [
    {
        title: "Akupunktur",
        text: [
          "Akupunktur er anvendelse af små tynde nåle, som typisk indføres i meridianbanerne i kroppen, for at opnå stimulering af akupunkturpunkterne, for på den måde at fremme kroppens balance.",
          "Kroppen har mange mikrosystemer, som man ved brug af akupunktur kan stimulere, for at behandle forskellige tilstande.",
          "Akupunktur er godt for mange ting, men især:",
          [
              "Uddrivelse af varme",
              "Bevæge (sætte gang i kroppen)",
              "Smertelindring og meget mere."
          ],
          "Ved stimulering af akupunkturpunkter kan man genoprette energiubalancer i livsenergien (Qi)."]
    },
    {
        title: "Moxa",
        text: [
          "På kinesisk består ordet for akupunktur, af to symboler ”Zhen Jiu”. Zhen betyder nål (akupunkturbehandling). Jiu betyder moxa (moxabehandling).",
          "Moxa kaldes også for Livets Ild, hvilket passer meget godt, da det har mange anvendelsesmetoder, herunder:",
          [
              "Styrker de indre organer og deres funktioner.",
              "Afhjælper svaghed.",
              "Støtter qi (liv) og uddriver patogener"
          ],
          "ndenfor kinesisk medicin anvendes moxa i mange citater, bl.a. ",
          "”For sygdomme som ikke egner sig til behandling med nåle, brug moxa”",
          "som citeret fra ”Ling Shu”. Så kort sagt så er der ingen akupunktur uden moxa. Moxa er den bedste teknik til at nære kroppen."
        ]
    },
    {
        title: "Auriculoterapi",
        text: [
          "Auriculoterapi er en anderledes form for nåleterapi, da det hele foregår i øret. Øret, ligesom så mange andre steder på kroppen, er et mikrosystem der afspejler resten af kroppens tilstand, og ligeledes kan man også behandle hele kroppen i øret alene. Her anvendes ligeledes nåle som til akupunktur (bare kortere), samt ørefrø og permanåle.",
          "Fordelene ved auriculoterapi er bl.a. at behandlingen kan forlænges ved brug af ørefrø og permanåle, da klienten beholder dem i efter behandlingen. Derudover er det en måde at få behandling på, hvis man er nervøs for rigtig akupunktur.",
          "Auriculoterapi anvender jeg ofte kun som supplement til akupunkturbehandlingerne."
        ]
    },
    {
        title: "TENS",
        text: [
          "TENS står for Transkutan Elektrisk Nerve Stimulation, som er anvendelse af lav frekvens strøm der via elektroder kobles til akupunkturnålene for at stimulerer nålene og dermed øge effekten.",
          "TENS anvendes ved kroniske tilstande og gamle stagnationer der kræver lidt ekstra for at blive frigivet.",
          "TENS gør ikke ondt."
        ]
    },
    {
        title: "Cupping",
        text: [
          "Der anvendes både fire cupping og moving cupping til behandling af muskelsmerter og spændinger.",
          "Fire cupping er anvendelse af glaskopper, som ved brug af ild, danner et vaccum når de påsættes huden. Dette er rigtig godt til at løsne stagnationer i kroppen, som fx ved gamle skader eller muskelspændinger.",
          "Moving cupping, er anvendelse af glaskopper med en sugebold på, hvorved man kan lave vaccum i koppen og dernæst bevæge koppen rundt på huden, og dermed løsne op i vævet. Det er en form for dybdegående bindevævsmassage."
        ]
    }
];
</script>

<template>
   <main class="main">
        <header><Hero /></header>

        <section class="main__container">
            <Treatment v-for="(item, index) in treatments" :key="index" :title="item.title" :text="item.text"/>
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