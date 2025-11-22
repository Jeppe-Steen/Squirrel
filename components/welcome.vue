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
        padding: 50px 0;

        h2 {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        p {
            font-size: 1rem;
        }
    }
</style>