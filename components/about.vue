<script setup>
const array = [
    "Mit navn er Frederikke, jeg er uddannet akupunktør fra Danmarks Akupunktur Uddannelse i Odder, den eneste skole i Danmark som underviser og uddanner indenfor Klassisk Kinesisk Medicin (CCM).",
    "Jeg er uddannet bioanalytiker, så nåle ligger ikke fjernt fra min hverdag, anvendelsen er bare blevet anderledes. Jeg valgte at uddanne mig til akupunktør efter en længere overvejelse, og da muligheden opstod, sprang jeg til med det samme - den bedste beslutning karrieremæssigt jeg har taget.",
    "Arbejdet som akupunktør, er et arbejde hvor man hver dag kan mærke at man gør en forskel: klienter der vender tilbage, og føler at det problem de kom med er lindret og glæder sig til at komme igen.",
    "Jeg forstår godt folk der siger at akupunktur er noget hokus-pokus, det følte jeg virkeligt også i starten. Men efter at have fået forståelsen for hvordan det virker, samt prøvet det på egen krop, giver det mere mening for mig, og har bare gjort det endnu mere spændende. Men jeg siger også selv nogle gange at det er hokus-pokus.. men det er hokus-pokus der virker.",
    "Min klinik er beliggende på sandmosevej 11, 9440 Aabybro, omringet af natur, fugle og en masse egern, deraf navnet.",
    "Jeg glæder mig til at møde dig og til at vi sammen kan finde en vej ud af din problematik, om det er fysisk, mentalt, kronisk, akut eller noget helt andet."
]
</script>

<template>
    <section class="about">
        <div class="me">
            <img src="../assets/image/me.jpg" />
        </div>
        <div class="text">
            <h2>Lidt om mig!</h2>
            <p v-for="data in array"> {{ data }}</p>
        </div>
    </section>
</template>

<style lang="scss">
    .about {
        margin-top: 50px;
        width: 100%;
        height: fit-content;
        display: grid;
        grid-template-areas: 
        'a' 'b';
        grid-template-columns: 100%;
        gap: 50px;
        padding: 0 20px;
        
        // large screens
        @media (min-width: 1200px) {
            grid-template-columns: 35% 65%;
            grid-template-areas: 'a b';
            padding: unset;
            padding: unset;
        };

        .me {
            grid-area: a;
            display: flex;
            flex-direction: column;
            align-items:center;

            img {
                width: 100%;
                box-shadow: 0 0 10px 5px #00000010;
            }
        }

        .text {
            grid-area: b;

            h2, p:not(:last-child) {
                margin-bottom: 20px;
            }
        }

    }
</style>