<script setup>
const booking = async () => {
    await navigateTo('https://klinik-egernbo-akupunktur.planway.com/', {
    external: true,
    open: {
        target: '_blank'
    }
    })
}

const navlinks = [
    { name: 'Booking', action: booking },
    { name: 'Forside', to: "/", styling: 'link' },
    { name: 'Behandlinger', to: "/behandlinger", styling: 'link' },
    { name: 'Priser', to: "/priser", styling: 'link' },
    { name: 'Kontakt', to: "/kontakt", styling: 'link' },
    { name: 'Om klinikken', to: "/om", styling: 'link' },
    { name: 'Anbefalinger', to: "/anbefalinger", styling: 'link' },
    { name: 'Viden', to: "/viden", styling: 'link' },
]
</script>

<template>
    <UiNavigation extra> 
        <template #extra>
            <UiButton
                label="Booking"
                @click="booking"
            />
        </template>

        <template #links>
            <UiButton
                v-for="(link, index) in navlinks" 
                :key="index"
                :label="link.name"
                :type="link.styling"
                :to="link.to"
                @click="link.action?.()"
            />
        </template>
    </UiNavigation>

    <main class="content-container">
        <div class="content-container--content">
            <slot></slot>
        </div>
    </main>

    <UiFooter>
        <section class="footer-wrapper">
            <div class="footer-wrapper--images">
                <NuxtImg id="rab" src="/images/RAB.png" alt="registreret alternativ behandler" width="845" height="224" loading="lazy"/>
            </div>
            <div class="footer-wrapper--information">
                <UiHeader centered>
                    <template #title><h2>Kontakt</h2></template>
                </UiHeader>
                <a href="22313969">+45 22 31 39 69</a>
                <a href="mailto:info@klinikegernboakupunktur.dk">info@klinikegernboakupunktur.dk</a>
                <p>Sandmosevej 11, 9440 Aabybro</p>
                <p>CVR 46094417</p>
            </div>
            <div class="footer-wrapper--links">
                <UiHeader centered>
                    <template #title><h2>Links</h2></template>
                </UiHeader>
                <a href="/">Forside</a>
                <a href="/behandlinger">Behandlinger</a>
                <a href="/priser">Priser</a>
                <a href="/kontakt">Kontakt</a>
                <a href="/om">Om klinikken</a>
                <a href="/anbefalinger">Anbefalinger</a>
                <a href="/priser#betingelser">Handelsbetingelser</a>
                <a href="/viden">Viden</a>
            </div>
            <div class="footer-wrapper--copyright">
                <strong>Klinik Egernbo Akupunktur | CVR: 46094417</strong>
            </div>
        </section>
    </UiFooter>
</template>

<style lang="scss" scoped>
.content-container {
    width: 100%;
    min-height: 100vh;
    background-color: var(--ui-background-primary);
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    grid-template-areas: 'content';

    @media (min-width: 1200px) {
        grid-template-columns: 1fr minmax(0, 60%) 1fr;
        grid-template-areas: '. content .';
        padding: 2rem;
    }

    &--content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}

.footer-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .5fr 1fr 1fr .5fr;
    grid-template-areas: 
        'images'
        'information'
        'links'
        'copyright';
    padding: 2rem;

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr .5fr;
        grid-template-areas: 
            'images information links'
            'copyright copyright copyright';
    }
    
    a {
        color: var(--ui-text-color-primary);
        text-decoration: none;
    }

    &--images {
        grid-area: images;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        #rab {
            width: 80%;
            height: auto;
        }
    }

    &--information {
        grid-area: information;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: .5rem;
    }

    &--links {
        grid-area: links;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: .5rem;
    }

    &--copyright {
        grid-area: copyright;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-wrap: wrap;

        text-align: center;
    }
}
</style>