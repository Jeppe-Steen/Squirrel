<script setup>
useSeoMeta({
  title: 'Om klinikken',
  description: 'Læs mere om Klinik Egernbo Akupunktur i Aabybro, behandlingsfilosofi og den erfaring, der ligger bag klinikken.',
  ogTitle: 'Om Klinik Egernbo Akupunktur',
  ogDescription: 'Lær klinikken og behandlingsfilosofien bedre at kende.',
  ogUrl: 'https://klinikegernboakupunktur.dk/om',
  twitterTitle: 'Om Klinik Egernbo Akupunktur',
  twitterDescription: 'Læs mere om klinikken og behandlingsfilosofien.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://klinikegernboakupunktur.dk/om'
    }
  ]
})
</script>
<template>
    <section class="content">
        <NuxtImg src="/images/me_1.webp" alt="Behandler hos Klinik Egernbo Akupunktur" height="1800" width="1200" preload fetchpriority="high" />
        <div class="content--text">
            <UiHeader>
                <template #subtitle>
                    <strong>Personen bag klinikken</strong>
                </template>
                <template #title>
                    <h1>Om Klinik Egernbo Akupunktur</h1>
                </template>
            </UiHeader>
            <p>Mit navn er Frederikke, jeg er uddannet akupunktør fra Danmarks Akupunktur Uddannelse i Odder, den eneste skole i Danmark som underviser og uddanner indenfor Klassisk Kinesisk Medicin (CCM).</p>
            <p>Jeg er uddannet bioanalytiker, så nåle ligger ikke fjernt fra min hverdag, anvendelsen er bare blevet anderledes. Jeg valgte at uddanne mig til akupunktør efter en længere overvejelse, og da muligheden opstod, sprang jeg til med det samme - den bedste beslutning karrieremæssigt jeg har taget.</p>
            <p>Arbejdet som akupunktør, er et arbejde hvor man hver dag kan mærke at man gør en forskel: klienter der vender tilbage, og føler at det problem de kom med er lindret og glæder sig til at komme igen.</p>
            <p>Jeg forstår godt folk der siger at akupunktur er noget hokus-pokus, det følte jeg virkeligt også i starten. Men efter at have fået forståelsen for hvordan det virker, samt prøvet det på egen krop, giver det mere mening for mig, og har bare gjort det endnu mere spændende. Men jeg siger også selv nogle gange at det er hokus-pokus.. men det er hokus-pokus der virker.</p>
            <p>Min klinik er beliggende på sandmosevej 11, 9440 Aabybro, omringet af natur, fugle og en masse egern, deraf navnet.</p>
            <p>Jeg glæder mig til at møde dig og til at vi sammen kan finde en vej ud af din problematik, om det er fysisk, mentalt, kronisk, akut eller noget helt andet.</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;

        @media (min-width: 1200px) {
           grid-template-columns: .7fr 1fr; 
        }

        img {
            width: 100%;
            height: auto;
        }

        &--text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>