<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.description;
</script>

<template>
    <section class="description">
        <article class="what">
            <header class="what__header">
                <h3>Klassisk Kinesisk Medicin</h3>
                <h2>Hvad er akupunktur?</h2>
            </header>

            <main class="what__main">
                <p>Akupunktur er en af verdens ældste behandlingsformer og anvendes i dag bredt som en effektiv, naturlig og holistisk tilgang til både fysiske og mentale udfordringer. I klinikken arbejder vi ud fra et helhedsorienteret perspektiv, hvor vi ser kroppen som en samlet enhed. Når der opstår ubalance – fysisk, følelsesmæssigt eller mentalt – viser det sig ofte i form af smerter, uro, stress eller andre symptomer.</p>
                <p>Med akupunktur stimuleres kroppens energisystem via udvalgte punkter, hvilket fremmer blodcirkulation, dæmper inflammation, reducerer spændinger og hjælper nervesystemet tilbage i en mere rolig og reguleret tilstand. For mange giver behandlingen både øjeblikkelig afspænding og langsigtet forandring.</p>
                <p>I klinikken tilbydes trygge, professionelle og individuelt tilpassede behandlingsforløb, hvor vi sammen arbejder på at skabe balance i både krop og sind — uanset om du søger smertelindring, mental ro eller støtte til kroppens hormonelle og indre funktioner.</p>
            </main>
        </article>
        
        <article class="for">
            <header class="for__header">
                <h3>Hvad kan Akupunktur afhjælpe:</h3>
                <h2>Behandlinger</h2>
            </header>

            <main class="for__main">
                <ul>
                    <li>Stress, tankemylder og overtænkning</li>
                    <li>Vrede og irritabilitet</li>
                    <li>Depression og lavt energiniveau</li>
                    <li>Symptomer i forbindelse med overgangsalderen</li>
                    <li>Uro i sind og krop</li>
                    <li>Smerter i nakke, skuldre og ryg (både kroniske og akutte)</li>
                    <li>Iskiassmerter og lændesmerter</li>
                    <li>Ledsmerter, herunder tennisalbue</li>
                    <li>Dystonier og kropslige skævheder</li>
                    <li>Forstoppelse og diarré</li>
                    <li>Infertilitet og hormonelle ubalancer</li>
                    <li>Og meget mere…</li>
                </ul>

                <img src="../assets/image/treatments/hand.webp" />
            </main>
        </article>

        <article class="you">
            <header class="you__header">
                <h3>En behandling der tager udgangspunkt i dig</h3>
                <h2>Dig i centrum</h2>
            </header>

            <main class="you__main">
                <p>I klinikken sættes der god tid af til hver session. Før første behandling gennemgør vi dine symptomer, din hverdag og din generelle sundhedstilstand, så forløbet kan målrettes netop dig. Selve behandlingen foregår i rolige omgivelser, hvor du kan slappe af og give kroppen plads til at arbejde.</p>
                <p>Uanset om du kommer for at få hjælp til smerter, stress, hormonelle forandringer eller kroniske ubalancer, er målet altid det samme: at skabe varig forbedring, øget velvære og en stærkere indre balance.</p>
            </main>
        </article>
    </section>
</template>

<style lang="scss">
    .description {
        margin: 40px 0;
        
        .what {
            margin-top: 30px;
            
            p:not(:last-child) {
                margin-bottom: 10px;
            }

            &__header {
               margin-bottom: 20px;
            }
        }

        .for {
            margin-top: 30px;
            &__header {
               margin-bottom: 20px;
            }

            &__main {
                display: grid;
                grid-template-areas: 
                    "list image";
                grid-template-columns: 1fr 1fr;
                gap: 20px;

                ul {
                    padding-left: 20px; 
                    margin-bottom: 20px;
                }

                img {
                    border-radius: 50px;
                    width: 100%;
                    overflow:hidden;
                }
            }
        }

        .you {
            margin-top: 30px;

            &__header {
               margin-bottom: 20px;
            }

            p:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
</style>
