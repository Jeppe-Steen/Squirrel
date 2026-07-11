<script lang="ts" setup>
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
            <UiCard title="test"></UiCard>
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
            grid-template-columns: 1fr 1fr;
            gap: 2rem;

            &__text {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            &__img {
                width: 100%;
                border-radius: 20px;
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
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
    }
</style>