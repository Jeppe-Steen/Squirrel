<script setup>
import { createClient } from '@supabase/supabase-js';
import PriceShell from './reuseable/PriceShell.vue';
import ancor from './reuseable/ancor.vue';

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
            <br/>
            <p>Her kan du læse handelsbetingelserne. <a href="/priser#handelsbetingelser">Se handelsbetingelser</a></p>
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
        
        <header class="prices-component__header">
            <ancor path="handelsbetingelser"></ancor>
            <h3> Betingelser ved booking af akupunkturbehandling</h3>
            <h1>Handelsbetingelser</h1>
        </header>
        
         <div class="text-section">
            <p>Når du booker en tid, accepterer du følgende betingelser:</p>
            <br/>
            <h4>Afbud og udeblivelse</h4>
            <p>Afbud skal meldes senest 24 timer før din aftalte tid. Ved afbud senere end dette – opkræves 50% af behandlingsprisen.</p>
            <p>Ved udeblivelse – opkræves det fulde beløb for behandlingen.</p>
            <br/>
            <h4>Ændring af tid</h4>
            <p>Ønsker du at ændre din tid, skal dette ligeledes ske senest 24 timer før.</p>
            <br/>
            <h4>Forsinkelse</h4>
            <p>Kommer du for sent, kan din behandling blive forkortet tilsvarende, så næste klient ikke påvirkes. Der gives ikke afslag i prisen.</p>
            <br/>
            <h4>Helbred og ansvar</h4>
            <p>Det er vigtigt, at du informerer om relevante helbredsmæssige forhold (fx graviditet, medicin, sygdom eller lignende), så behandlingen kan tilpasses dig bedst muligt.</p>
            <br/>
            <h4>Betaling</h4>
            <p>Betaling sker umiddelbart efter behandlingen via kort, mobilepay eller kontant.</p>
            <br/>
            <h4>Forløb og effekt</h4>
            <p>Akupunktur er en individuel behandlingsform, og effekten kan variere fra person til person. Der gives derfor ingen garanti for specifikke resultater.</p>
            <br/>
            <h4>Fortrolighed</h4>
            <p>Alle oplysninger behandles fortroligt og i overensstemmelse med gældende databeskyttelsesregler.</p>
            <br/>
            <h3>Tak fordi du respekterer min tid og mit arbejde – jeg glæder mig til at tage imod dig 🌿</h3>
            
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
