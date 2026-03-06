<script setup>
import { modal } from '../composable/model.js';
const { showModal } = modal();
const showVideo = ref(false);
</script>

<template>
    <section class="reviews-component">
        <div class="reviews-component__header">
            <h3>Hvad siger mine kunder?</h3>
            <h2>Anmeldelser</h2>
        </div>
        <div class="reviews-component__container">
            <article class="review">
                <p>"Jeg har fået 5 behandlinger hos Frederikke. Det er et godt sted at komme, rolige lokaler og omgivelser. Frederikke har behandlet muskler og ar i mit lår efter et brækket lårben og 2 operationer. Selv om jeg var skeptisk, har det gjort en forskel, og kan virkelig anbefales."</p>
                <span>- Per</span>
            </article>
            
            <article class="review">
                <p>"Jeg kontaktede Frederikke på baggrund af vores 16 årige datter Celina. Celina har skoliose, som blev "opdaget" for ca 3 år siden. Hun er efterskole elev og målvogter i håndbold på et ganske ok niveau.  Celina har det sidste halve år været præget af smerter i sin venstre lænd/ nedre ryg samt venstre ben ..."</p>
                
                <button class="read-more" @click="showModal(true)">Læs den fulde anmeldelse her</button>
                <span>- Celina og Anne-Marie</span>
            </article>
        </div>

        <!-- <video class="reviews-component__video" controls poster="../assets/image/placeholder.png">
            <source type="video/mp4">
        </video> -->

        <iframe v-if="showVideo" class="reviews-component__video" src="https://www.youtube.com/embed/4B3eof7GcIg?controls=1"></iframe>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

    .reviews-component {
        margin: 40px 0;
        width: 100%;
        display: grid;
        grid-template-areas: 
            "header"
            "container"
            "video";
        gap: 40px; 
        grid-template-columns: 1fr;

        @media (min-width: 1200px) {
            grid-template-areas: 
                "header header"
                "container container"
                "video video";
            grid-template-columns: 1fr 1fr;
        }

        &__header {
            grid-area: header;
            text-align: left;

            h2 {
                font-size: 2.5rem;
            }
        }

        &__container {
            grid-area: container;
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr 1fr;
            }

            .review {
                display: flex;
                flex-direction: column;
                background-color: white;
                box-shadow: 0 0 10px 5px #00000030;
                padding: 20px;
                height: fit-content;

                button {
                    padding: 10px;
                    margin: 10px 0;
                    background-color: $lightGreen;
                    border: none;
                    
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        &__video {
            grid-area: video;
            width: 100%;
            height: fit-content;
            min-height: 300px;
            box-shadow: 0 0 10px 5px #00000030;

            @media (min-width: 1200px) {
                min-height: 500px;
            }
        }
    }
</style>