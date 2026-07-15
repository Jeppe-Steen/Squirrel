<script lang="ts" setup>
    import data from "../content/treatmentTypes.json";

    useSeoMeta({
        title: 'Behandlinger',
        description: 'Læs om vores behandlinger med akupunktur, moxa, cupping og andre behandlingsformer hos Klinik Egernbo Akupunktur i Aabybro.',
        ogTitle: 'Behandlinger | Klinik Egernbo Akupunktur',
        ogDescription: 'Få et overblik over vores behandlingsformer.',
        ogUrl: 'https://klinikegernboakupunktur.dk/behandlinger',
        twitterTitle: 'Behandlinger | Klinik Egernbo Akupunktur',
        twitterDescription: 'Få et overblik over vores behandlingsformer.'
    })

    useHead({
        link: [
            {
            rel: 'canonical',
            href: 'https://klinikegernboakupunktur.dk/behandlinger'
            }
        ],
        script: [
            {
                key: 'treatments-schema',
                type: 'application/ld+json',
                textContent: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: "Behandlinger",
                    itemListElement: data.treatmentTypes.map((item, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                            "@type": "Thing",
                            name: item.title,
                            description: item.text[0]
                        }
                    }))
                })
            }
        ]
    })
</script>

<template>
    <section class="hero">
        <UiHeader>
            <template #subtitle>
                <strong>Her kan du se havd jeg tilbyder af behandlinger</strong>
            </template>
            <template #title>
                <h1>Behandlinger</h1>
            </template>
        </UiHeader>

        <p>Akupunktur kan være en hjælp ved mange forskellige smerter og lidelser. Den mest optimale behandling afhænger dog af dine symptomer og behov. Læs mere om de forskellige behandlingsformer nedenfor for at finde den løsning, der passer bedst til dig.</p>
        <UiButton to="https://klinik-egernbo-akupunktur.planway.com/" label="Book tid" type="cta" size="large" />
    </section>

    <section class="treatment-type">
         <UiHeader>
            <template #subtitle>
                <strong>Hvad arbejder jeg med?</strong>
            </template>
            <template #title>
                <h2>Behandlingsformer</h2>
            </template>
        </UiHeader>

        <article class="treatment-type__type" v-for="(type, index) in data.treatmentTypes" :key="index">
            <UiHeader>
                <template #subtitle><strong>{{ type.subtitle }}</strong></template>
                <template #title><h3>{{ type.title }}</h3></template>
            </UiHeader>
            
            <template v-for="text in type.text">
                <ul v-if="Array.isArray(text)">
                    <li v-for="(bullet, index) in text" :key="index"> {{ bullet }}</li>
                </ul>

                <p v-else> {{ text }}</p>
            </template>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    .hero {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .treatment-type {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > article:not(:last-child) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.437);
        }

        &__type {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            padding: 1rem 0;
            list-style-position: inside;
        }
    }
</style>