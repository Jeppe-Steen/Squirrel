<script lang="ts" setup>

const reviewCards = [{}, {}]

</script>

<template>
    <section class="hero">
        <UiHeader description="Velkommen til Klinik Egernbo Akupunktur">
            <template #header>
                <h1>Din lokale akupunktør i Aabybro.</h1>
            </template>
        </UiHeader>

        <article class="hero--content">
            <div class="hero--content__text">
                <p>Hos mig får du professionel, individuel behandling gennem klassisk kinesisk medicin (CCM), hvor vi arbejder med kroppen som en helhed for at skabe balance og lindring.</p>
                <p>Akupunktur hjælper mod en lang række ubalancer og symptomer – fra stress og uro til muskelsmerter, spændinger og søvnproblemer. Min tilgang er holistisk, og hver behandling tilpasses dine behov, så du både oplever øjeblikkelig afspænding og langvarig forbedring.</p>
                <p>Jeg tilbyder akupunktur, moxa, auriculoterapi, TENS og cupping, alle med fokus på professionalisme, tryghed og resultater</p>
            </div>

            <img class="hero--content__img" src="../assets/image/treatments/fireCupping_1.webp" alt="cupping" />
        </article>

        <UiButton label="Se hvilke behandlinger jeg tilbyder" size="large" styling="cta" />
        <UiButton label="Se priser" size="large" styling="cta" />
    </section>

    <section class="reviews">
        <UiHeader description="Hvad siger mine kunder?">
            <template #header>
                <h2>Anmeldelser</h2>
            </template>
        </UiHeader>

        <article class="reviews--content">
            <div class="reviews--content__cards">
                <div class="reviews--content__cards--card" v-for="(review, index) in reviewCards" :key="index">
                    <UiHeader description="trustpilot">
                        <template #header>
                            <h3>Navn op kunde</h3>
                        </template>
                    </UiHeader>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et obcaecati facere molestiae, sunt magnam incidunt reprehenderit quibusdam autem nesciunt. Quam ipsam in inventore incidunt temporibus, ea saepe tenetur dolorem quaerat.</p>
                    <UiButton label="læs mere her"/>
                </div>
            </div>

            <iframe class="reviews--content__video" src="https://www.youtube.com/embed/ZsqNsdmy29c?controls=1" title="youtube_video"></iframe>

            <UiButton label="Læs flere anmeldelser" styling="cta" size="large"/>
        </article>
    </section>

    <section class="description">
        <UiHeader description="Klassisk Kinesisk Medicin">
            <template #header>
                <h2>Hvad er akupunktur?</h2>
            </template>
        </UiHeader>

        <p>Akupunktur er en af verdens ældste behandlingsformer og anvendes i dag bredt som en effektiv, naturlig og holistisk tilgang til både fysiske og mentale udfordringer. I klinikken arbejder jeg ud fra et helhedsorienteret perspektiv, hvor vi ser kroppen som en samlet enhed. Når der opstår ubalance – fysisk, følelsesmæssigt eller mentalt – viser det sig ofte i form af smerter, uro, stress eller andre symptomer.</p>
        <p>Med akupunktur stimuleres kroppens energisystem via udvalgte punkter, hvilket fremmer blodcirkulation, dæmper inflammation, reducerer spændinger og hjælper nervesystemet tilbage i en mere rolig og reguleret tilstand. For mange giver behandlingen både øjeblikkelig afspænding og langsigtet forandring.</p>
        <p>I klinikken tilbydes trygge, professionelle og individuelt tilpassede behandlingsforløb, hvor vi sammen arbejder på at skabe balance i både krop og sind — uanset om du søger smertelindring, mental ro eller støtte til kroppens hormonelle og indre funktioner.</p>
    </section>

    <section class="treatments">
        <UiHeader description="Hvad kan jeg behandle?">
            <template #header>
                <h2>Behandlinger</h2>
            </template>
        </UiHeader>

        <article class="treatments--content">
            <ul class="treatments--content__text">
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

            <img class="treatments--content__img" src="../assets/image/treatments/hand.webp" alt="akupunktur i håneden">
        </article>
    </section>

    <section class="clinik">
        <UiHeader description="En behandling der tager udgangspunkt i dig">
            <template #header>
                <h2>Klienten i centrum</h2>
            </template>
        </UiHeader>

        <p>I klinikken sættes der god tid af til hver session. Før første behandling gennemgår vi dine symptomer, din hverdag og din generelle sundhedstilstand, så forløbet kan målrettes netop dig. Selve behandlingen foregår i rolige omgivelser, hvor du kan slappe af og give kroppen plads til at arbejde.</p>
        <p>Uanset om du kommer for at få hjælp til smerter, stress, hormonelle forandringer eller kroniske ubalancer, er målet altid det samme: at skabe varig forbedring, øget velvære og en stærkere indre balance.</p>
        <UiButton label="Kontakt mig idag" size="large" styling="cta" />
    </section>

    <section class="gallery">
        <img src="../assets//image/treatments/ear.webp" alt="Akupunktur i øret">
        <img src="../assets/image/treatments/foot.webp" alt="Akuprasur på foden">
        <img src="../assets/image/treatments/fireCupping_1.webp" alt="Fire cupping">
        <img src="../assets/image/treatments/head.webp" alt="Aupunktur i hovedet">
        <img src="../assets/image/treatments/hand.webp" alt="Akupunktur i hånden">
        <img src="../assets/image/treatments/stomach_1.webp" alt="Akupunktur i maven">
        <img src="../assets/image/treatments/Pulse.webp" alt="Pulsdiagnose">
        <img src="../assets/image/treatments/klinic_1.webp" alt="Klinikken">
        <img src="../assets/image/treatments/klinic_2.webp" alt="Klinikken">
        <img src="../assets/image/treatments/klinic_3.webp" alt="Klinikken">
    </section>

    <section class="faq">
        <UiHeader description="Ofte stillede spørgsmål">
            <template #header><h2>FAQ</h2></template>
        </UiHeader>

        <article class="faq--content">
            <div class="faq--content__card">
                <UiHeader description="">
                    <template #header><h3>Test</h3></template>
                </UiHeader>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab dolorem eligendi dolorum repudiandae hic quibusdam officia esse qui fugiat adipisci ratione, quia expedita possimus ducimus similique assumenda reprehenderit veritatis!</p>
                <UiButton label="test knap" />
            </div>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    .hero {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr 1fr;
            }

            &__text {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            &__img {
                width: 100%;
            }
        }
    }

    .reviews {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            &__cards {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;

                @media (min-width: 1200px) {
                    grid-template-columns: 1fr 1fr;
                }


                &--card {
                    width: 100%;
                    height: fit-content;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    box-shadow: 0px 0px 20px #00000050;
                }
            }

            &__video {
                height: 450px;
            }
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .treatments {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr .8fr;
            }

            &__text {
                display: flex;
                flex-direction: column;
            }

            &__img {
                width: 100%;
            }
        }
    }

    .clinik {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        img {
            width: 100%;
        }
    }

    .faq {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr 1fr;
            }

            &__card {
                width: 100%;
                height: fit-content;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                box-shadow: 0px 0px 20px #00000050;
            }
        }
    }
</style>