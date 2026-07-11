<script lang="ts" setup>
import data from '../content/prices.json'
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
        <p>Her kan du læse handelsbetingelserne. Se handelsbetingelser</p>
    </section>

    <section class="prices">
        <UiHeader description="Dette tilbydes">
            <template #header>
                <h2>Priser</h2>
            </template>
        </UiHeader>

        <article class="prices__price" v-for="(price, index) in data.prices" :key="index">
            <UiHeader description="">
                <template #header>
                    <h3>{{ price.title }} - {{ price.price }}</h3>
                </template>
            </UiHeader>
            
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
    }
}
</style>