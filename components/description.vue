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
            <ul v-else-if="element.type === 'list'">
                <li v-for="listItem in element.text">{{ listItem }}</li>
            </ul>
        </div>


    </section>
</template>

<style lang="scss">
    .description {
        padding: 50px 20px;

        // large screens
        @media (min-width: 1200px) { 
            padding: 50px 0;
        };

        h2 {
            margin-bottom: 10px;
        }

        h3 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
        }

        ul {
            padding-left: 20px; 
            margin-bottom: 20px;
        }
    }
</style>