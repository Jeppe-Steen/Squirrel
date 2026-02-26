<script setup>
</script>

<template>
    <section class="prices-component">
        <h2>Priser for behandlinger</h2>

        <div class="container">
             <article>
                <h2>Første konsultation</h2>
                <p>650 DKK</p>
                <div>
                    <h3>Indeholder</h3>
                    <ul>
                        <li>Individuel Samtale</li>
                        <li>Puls/tunge diagnose</li>
                        <li>Behandling</li>
                        <li>Varighed ca. 80 min</li>

                        <br/>
                        <li>
                            <NuxtLink to="/betingelser">Læs handelsbetingelserne her</NuxtLink>
                        </li>
                    </ul>
                </div>
                <NuxtLink class="contact" to="/kontakt">Kontakt mig her</NuxtLink>
            </article>

            <article>
                <h2>Alm. Behandling</h2>
                <p>600 DKK</p>
                <div>
                    <h3>Indeholder</h3>
                    <ul>
                        <li>Behandling</li>
                        <li>Varighed ca. 50 min</li>

                        <br/>
                        <li>
                            <NuxtLink to="/betingelser">Læs handelsbetingelserne her</NuxtLink>
                        </li>
                    </ul>
                </div>
                 <NuxtLink class="contact" to="/kontakt">Kontakt mig her</NuxtLink>
            </article>
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

    h2 {
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-top: 50px;
        position: relative;

        // large screens
        @media (min-width: 1200px) {  
            flex-direction: row;
        };

        article {
            width: 300px;
            height: 400px;
            display:flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 0 10px 5px #00000030;
            background-color: white;
            position: relative;

            a {
                color: black;
                font-weight: bold;
            }

            // large screens
            @media (min-width: 1200px) {  
                width: 350px;
                height: 450px;
            };

        &:first-child {
            background-color: $darkGreen;
            color: white;
        }

            h2 {
                padding: 20px 0;
            }

            p {
                font-size: 2.5rem;
                padding: 20px 0;
            }

            div {
                text-align:center;

                ul {
                    list-style: none;
                }
            }
        }

        .contact {
            width: 200px;
            color: black;
            text-decoration: none;
            background-color: $lightGreen;
            position: absolute;
            bottom: 20px;
            box-shadow: 0 0 10px 5px #00000030;
            text-align:center;
            padding: 10px;
        }
    }
}
</style>
