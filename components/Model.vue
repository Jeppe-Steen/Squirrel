<script setup> 
import { modal } from '../composable/model.js';
const { show, content, showModal } = modal();


</script>

<template>
    <section class="model-component" v-if="show">
        <article>
            <header>
                <h3>Anmeldelse</h3>
                <h3 @click="showModal(false)">Luk</h3>
            </header>

            <p v-for="text in content.text"> {{ text }}</p>
            <p>- {{ content.name }}</p>
        </article>
    </section>
</template>

<style lang="scss" scoped>
    $lightestGreen:#F1F3E0;
    $lightGreen:#D2DCB6;
    $green:#A1BC98;
    $darkGreen:#778873;
    
    .model-component {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        backdrop-filter: blur(8px);
        box-shadow: 0 0 10px 5px #00000030;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;

        article {
            width: 100%;
            height: 100vh;
            background-color: $lightGreen;
            padding: 40px;
            overflow: scroll;

            @media (min-width: 1200px) {
                width: 50%;
                overflow: scroll;
                height: 100vh;
                overflow-y: scroll
            }

            header {
                display:flex;
                flex-direction: row;
                justify-content: space-between;

                h3 {
                    font-size:1.5rem;
                    margin-bottom: 20px;
                }
            }
            p:not(:last-child) {
                margin-bottom: 10px;
            }

            p:last-child {
                font-weight: bold;
            }
        }
    }
</style>