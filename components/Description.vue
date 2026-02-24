<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.description;
</script>

<template>
    <section class="description">
        <h2>{{text.header}}</h2>
        <div v-for="element in text.text">
            <h3 v-if="element.type === 'header'">{{ element.text }}</h3>
            <p v-else-if="element.type === 'paragraph'">{{ element.text }}</p>
            <div class="list" v-else-if="element.type === 'list'">
                <ul>
                    <li v-for="listItem in element.text">{{ listItem }}</li>
                </ul>
                <img src="../assets/image/treatments/hand.webp" />
            </div>
        </div>


    </section>
</template>

<style lang="scss">
    .description {
        margin-top: 50px;
        
        h2 {
            margin-bottom: 10px;
            text-align:left;
        }

        h3 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
        }

        .list {
            display: grid;
            grid-template-areas: 
                "list image";
            grid-template-columns: 1fr 1fr;
            gap: 20px;

            ul {
                padding-left: 20px; 
                margin-bottom: 20px;
            }

            img {
                border-radius: 50px;
                width: 100%;
                overflow:hidden;
            }
        }
    }
</style>
