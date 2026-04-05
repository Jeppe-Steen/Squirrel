<script setup>
import { createClient } from '@supabase/supabase-js';
import PriceShell from './reuseable/PriceShell.vue';

const allPrices = ref([]);

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey);
async function getPrices() {
    let { data: prices, error } = await supabase.from('prices').select('*');
    if(!error) {
        allPrices.value = prices;
        return;
    }

    return;
};

onMounted(() => {
    getPrices();
})

</script>

<template>
    <section class="prices-component">
        <header class="prices-component__header">
            <h3>Kontakt mig for yderligere spørgsmål</h3>
            <h1>Priser for behandlinger</h1>
        </header>

        <div class="text-section">
            <p>Er du omfattet af en sundhedsforsikring, har du mulighed for at få dækket dine akupunkturbehandlinger. Kontakt dit forsikringsselskab inden du påbegynder behandlingen.</p>
            <br/>
            <p>”Danmark” giver tilskud til akupunkturbehandling, ring og hør nærmere.</p>
            <br/>
            <p>Vedrørende RAB registrering <a href="https://stps.dk/sundhedsfaglig/registrering/registreringsordning-for-alternative-behandlere-rab" target="_blank">se her</a>. (link til styrelsen for patientsikkerhed)</p>
        </div>




        <h2 class="prices-component__subheading">Behandlinger</h2>
        <div class="price-container">
            <PriceShell v-for="price in allPrices.filter(price => price.type === 'general')" :key="price.id" v-bind="price" />
        </div> 

        <h2 class="prices-component__subheading">Klippekort</h2>
        <div class="price-container">
            <PriceShell v-for="price in allPrices.filter(price => price.type === 'klippekort').reverse()" :key="price.id" v-bind="price" />
            <p>*Kan ikke købes i forbindelse med et forløb igennem sundhedsforsikring</p>
        </div>

        <h2 class="prices-component__subheading">Cupping</h2>
        <div class="price-container">
            <PriceShell v-for="price in allPrices.filter(price => price.type === 'cupping').reverse()" :key="price.id" v-bind="price" />
        </div>

        <h2 class="prices-component__subheading">Rygestop</h2>
        <div class="price-container">
            <PriceShell v-for="price in allPrices.filter(price => price.type === 'rygestop').reverse()" :key="price.id" v-bind="price" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.prices-component {
    margin-top: 50px;
    width: 100%;
    height: fit-content;

    &__subheading {
        width: 100%;
        text-align: left;
        padding: 10px;
        margin-top: 10px;
    }

    .text-section {
        width: 100%;
        margin: 20px 0;
    }

    .price-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 40px;

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>
