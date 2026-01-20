<script setup>
import ancor from './reuseable/ancor.vue';
import generalText from "../content/json/generalText.json";
const text = generalText.data.agreement;
</script>

<template>
    <section class="agreements">
        <ancor path="samtykke" />
        <ancor path="FAQ" />
        <h2>{{text.header}}</h2>
        <p>{{ text.text }}</p>
    </section>
</template>

<style lang="scss">
.agreements {
        h2 {
            margin-bottom: 10px;
            text-align:center;
        }

        p {
            margin-bottom: 10px;
        }
    }
</style>