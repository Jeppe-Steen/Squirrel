<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.welcome;
</script>

<template>
    <section class="welcome__main">
        <h2>{{ text.header }}</h2>
        <p>{{ text.text }}</p>
    </section>
</template>

<style lang="scss">
    .welcome__main {
        width: 100%;
        height: fit-content;
        padding: 50px 20px 0;
        text-align: center;

        // large screens
        @media (min-width: 1200px) {
            padding: 50px 0;
        };

        h2 {
            margin-bottom: 10px;
        }
    }
</style>