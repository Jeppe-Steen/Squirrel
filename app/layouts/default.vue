<script setup>
const navlinks = [
    { name: 'Bestil tid', styling: 'primary' },
    { name: 'Forside', styling: 'link' },
    { name: 'Behandlinger', styling: 'link' },
    { name: 'Priser', styling: 'link' },
    { name: 'Kontakt', styling: 'link' },
    { name: 'Om klinikken', styling: 'link' },
    { name: 'Anmeldelser', styling: 'link' },
]
</script>

<template>
    <UiNavigation extra> 
        <template #extra>
            <UiButton
                label="Bestil tid"
            />
        </template>

        <template #links>
            <UiButton
                v-for="(link, index) in navlinks" 
                :key="index"
                :label="link.name"
                :styling="link.styling"
            />
        </template>
    </UiNavigation>

    <main class="content-container">
        <div class="content-container--content">
            <slot></slot>
        </div>
    </main>

    <UiFooter>

    </UiFooter>
</template>

<style lang="scss" scoped>
.content-container {
    width: 100%;
    min-height: 100vh;
    background-color: var(--ui-background-1);
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
</style>