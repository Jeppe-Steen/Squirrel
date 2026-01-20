<script setup>
import ancor from "./reuseable/ancor.vue";
import generalText from "../content/json/generalText.json";
const text = generalText.data.conditions;
</script>

<template>
    <section class="conditions">
        <ancor path="handelsbetingelser" />
        <h2>{{text.header}}</h2>
        <p>{{ text.text }}</p>
    </section>
</template>

<style lang="scss">
.conditions {
        h2 {
            margin-bottom: 10px;
            text-align:center;
        }

        p {
            margin-bottom: 10px;
        }
    }</style>
