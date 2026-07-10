<script setup>
const navlinks = [
    { name: 'Forside', styling: 'link' },
    { name: 'Behandlinger', styling: 'link' },
    { name: 'Priser', styling: 'link' },
    { name: 'Kontakt', styling: 'link' },
    { name: 'Om klinikken', styling: 'link' },
    { name: 'Anmeldelser', styling: 'link' },
    { name: 'Bestil tid', styling: 'primary' },
]
</script>

<template>
    <UiNavigation> 
      <template #logo>
        <h2>LOGO</h2>
      </template>

      <template #links>
          <UiButton 
            label="test"
          />
          <UiButton 
            label="test"
          />
      </template>
    </UiNavigation>

    <main class="content-container">
        <div class="content-container--content">
            <slot></slot>
        </div>
    </main>

    <UiFooter />
</template>

<style lang="scss" scoped>
.logo {
    height: 70%;
    width: auto;
}

.content-container {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color);
    padding: 2rem;

    display: grid;
    grid-template-columns: 1fr minmax(0, 70%) 1fr;
    gap: 1rem;
    grid-template-areas: '. content .';

    &--content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

}
</style>