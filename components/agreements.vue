<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.agreement;
</script>

<template>
    <section class="agreements">
        <h2>{{text.header}}</h2>
        <p>{{ text.text }}</p>
    </section>
</template>

<style lang="scss">
.agreements {
        padding: 50px 20px;

        // large screens
        @media (min-width: 1200px) { 
            padding: 50px 0;
        };

        h2 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 10px;
        }
    }
</style>