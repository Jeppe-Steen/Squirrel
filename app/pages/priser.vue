<script lang="ts" setup>
import data from '../content/prices.json'
const terms = [
    { title: "Afbud og udeblivelse", text: "Afbud skal meldes senest 24 timer før din aftalte tid. Ved afbud senere end dette – opkræves 50% af behandlingsprisen. Ved udeblivelse – opkræves det fulde beløb for behandlingen." },
    { title: "Ændring af tid", text: "Ønsker du at ændre din tid, skal dette ligeledes ske senest 24 timer før." },
    { title: "Forsinkelse", text: "Kommer du for sent, kan din behandling blive forkortet tilsvarende, så næste klient ikke påvirkes. Der gives ikke afslag i prisen." },
    { title: "Helbred og ansvar", text: "Det er vigtigt, at du informerer om relevante helbredsmæssige forhold (fx graviditet, medicin, sygdom eller lignende), så behandlingen kan tilpasses dig bedst muligt." },
    { title: "Betaling", text: "Betaling sker umiddelbart efter behandlingen via kort, mobilepay eller kontant." },
    { title: "Forløb og effekt", text: "Akupunktur er en individuel behandlingsform, og effekten kan variere fra person til person. Der gives derfor ingen garanti for specifikke resultater." },
    { title: "Fortrolighed", text: "Alle oplysninger behandles fortroligt og i overensstemmelse med gældende databeskyttelsesregler." },
]
</script>

<template>
    <section class="hero">
        <UiHeader description="Kontakt mig for yderligere spørgsmål">
            <template #header>
                <h1>Priser for behandlinger</h1>
            </template>
        </UiHeader>

        <p>Er du omfattet af en sundhedsforsikring, har du mulighed for at få dækket dine akupunkturbehandlinger. Kontakt dit forsikringsselskab inden du påbegynder behandlingen.</p>
        <p>”Danmark” giver tilskud til akupunkturbehandling, ring og hør nærmere.</p>
        <p>Vedrørende RAB registrering <a href="https://stps.dk/sundhedsfaglig/registrering/registreringsordning-for-alternative-behandlere-rab" target="_blank">se her</a> (link til styrelsen for patientsikkerhed)</p>
        <p>Her kan du læse handelsbetingelserne. <a href="#betingelser">Se handelsbetingelser</a></p>
    </section>

    <section class="prices">
        <UiHeader description="Dette tilbydes">
            <template #header>
                <h2>Priser</h2>
            </template>
        </UiHeader>

        <article class="prices__price" v-for="(price, index) in data.prices" :key="index">
            <h3>{{ price.title }} - {{ price.price }}</h3>
            
            <template v-if="price.includes.length">
                <h4>Dette Inkluderer:</h4>
                <ul>
                    <li v-for="(item, index) in price.includes" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </template>

            <p v-if="price.nb"><small><i>* {{ price.nb }}</i></small></p>
        </article>
    </section>

    <section class="terms" id="betingelser">
        <UiHeader description="Betingelser ved booking af behandling">
            <template #header>
                <h2>Handelsbetingelser</h2>
            </template>
        </UiHeader>
        <p>Når du booker en tid, accepterer du følgende betingelser:</p>
        <article v-for="term in terms">
            <h3>{{ term.title }}</h3>
            <p>{{ term.text }}</p>
        </article>
        <p><strong>Tak fordi du respekterer min tid og mit arbejde – jeg glæder mig til at tage imod dig 🌿</strong></p>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.prices {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__price {
        padding: 1rem;
        list-style-position: inside;
        background-color: #D2DCB6;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
}

.terms {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>