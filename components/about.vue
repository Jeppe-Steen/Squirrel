<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.about;
</script>

<template>
    <section class="about">
        <div class="first"> <img src="../assets/image/Akupunktur.jpg"/> </div>
        <div class="second">
            <h2>Om mig!</h2>
            <p>Mit navn er Frederikke, jeg er uddannet akupunktør fra Danmarks Akupunktur Uddannelse i Odder, den eneste skole i Danmark som underviser og uddanner indenfor Klassisk Kinesisk Medicin (CCM).</p>
            <p>Jeg er uddannet bioanalytiker, så nåle ligger ikke fjernt fra min hverdag, anvendelsen er bare blevet anderledes. Jeg valgte at uddanne mig til akupunktør efter en længere overvejelse, og da muligheden opstod, sprang jeg til med det samme - den bedste beslutning karrieremæssigt jeg har taget.</p>
        </div>
        <div class="third">
            <p>Arbejdet som akupunktør, er et arbejde hvor man hver dag kan mærke at man gør en forskel: klienter der vender tilbage, og føler at det problem de kom med er lindret og glæder sig til at komme igen.</p>
             <p>Jeg forstår godt folk der siger at akupunktur er noget hokus-pokus, det følte jeg virkeligt også i starten. Men efter at have fået forståelsen for hvordan det virker, samt prøvet det på egen krop, giver det mere mening for mig, og har bare gjort det endnu mere spændende. Men jeg siger også selv nogle gange at det er hokus-pokus.. men det er hokus-pokus der virker.</p>
            <p>Min klinik er beliggende på sandmosevej 11, 9440 Aabybro, omringet af natur, fugle og en masse egern, deraf navnet.</p>
            <p>Jeg glæder mig til at møde dig og til at vi sammen kan finde en vej ud af din problematik, om det er fysisk, mentalt, kronisk, akut eller noget helt andet.</p>
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
        'a'
        'b' 
        'c';
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
        padding: 0 20px;

        // large screens
        @media (min-width: 1200px) {
            grid-template-areas: 
            'a b' 
            'c c';
            grid-template-columns: 50% 50%;
            grid-template-rows: 400px 250px;
            padding: unset;
        };

        h2, p {
            margin-bottom: 20px;
        }

        .first {
            grid-area: a;
            display:flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
                height: fit-content%;
                border-radius: 50px;
                box-shadow: 0 2px 6px #00000030;
                margin-bottom: 40px;

                 @media (min-width: 1200px) {
                    width: 80%;
                    height: 80%;
                    margin-bottom: unset;
                 }
            }
        }

        .second {
            grid-area: b;
        }

        .third {
            grid-area: c;
        }
    }
</style>