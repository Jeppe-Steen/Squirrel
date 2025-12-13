<script setup>
import ancor from './reuseable/ancor.vue';
</script>

<template>
    <section class="prices">
        <ancor path="priser"/>
        <h2>Priser for behandlinger</h2>

        <div class="container">
             <article>
                <h2>Første Samtale</h2>
                <p>850 DKK</p>
                <div>
                    <h3>Indeholder</h3>
                    <ul>
                        <li>Samtale</li>
                        <li>Behandling</li>
                        <li>Varighed ca. 60 min</li>
                    </ul>
                </div>
            </article>

            <article>
                <h2>Alm. Behandling</h2>
                <p>750 DKK</p>
                <div>
                    <h3>Indeholder</h3>
                    <ul>
                        <li>Behandling</li>
                        <li>Varighed ca. 45 min</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.prices {
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
 box-shadow: 0 0 10px 5px #00000010;
            background-color: white;

            // large screens
            @media (min-width: 1200px) {  
                width: 350px;
                height: 450px;
            };

        &:first-child {
            background-color: $green;
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
    }
}
</style>