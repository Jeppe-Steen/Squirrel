<script setup>
</script>

<template>
    <section class="prices-component">
        <header class="prices-component__header">
            <h3>Kontakt mig for yderligerer spørgsmål</h3>
            <h1>Priser for behandlinger</h1>
        </header>

        <article class="price">
            <header class="price__header">
                <h3>Første konsultation</h3>
                <h2>650 DKK</h2>
            </header>

            <div class="price__container">
                <h3>Dette indeholder:</h3>
                <ul>
                    <li>Individuel Samtale</li>
                    <li>Puls/tunge diagnose</li>
                    <li>Behandling</li>
                    <li>Varighed ca. 80 min</li>
                </ul>
            </div>
            <NuxtLink to="/kontakt"><p>Kontakt mig her</p></NuxtLink>
        </article>

        <article class="price">
            <header class="price__header">
                <h3>Alm. Behandling</h3>
                <h2>600 DKK</h2>
            </header>

            <div class="price__container">
                <h3>Dette indeholder:</h3>
                <ul>
                    <li>Behandling</li>
                    <li>Varighed ca. 50 min</li>
                </ul>
            </div>
            <NuxtLink to="/kontakt"><p>Kontakt mig her</p></NuxtLink>
        </article>
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

    .price {
        width: 100%;
        background-color: $lightGreen;
        margin-top: 20px;
        padding: 20px;

        &__header {
            margin-bottom: 10px;
        }

        &__container {
            ul {
                list-style: none;
            }
        }

        a {
            width: 100%;
            text-decoration: none;
            text-align: center;

            p {
                background-color: $lightestGreen;
                box-shadow: 0 0 10px 5px #00000030;
                padding: 10px;
                margin-top: 20px;
                color: black;
                font-weight: bold;
            }
        }
    }
}
</style>
