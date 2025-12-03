<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.CCM;
</script>

<template>
    <section class="ccm__main">
        <h2>{{ text.header }}</h2>
        <p v-for="texts in text.text">{{ texts }}</p>
    </section>
</template>

<style lang="scss">
    .ccm__main {
        width: 100%;
        height: fit-content;
        padding: 20px 0 50px 0;

        h2 {
            margin-bottom: 10px;
        }
        p {
            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }
</style>