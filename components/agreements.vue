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
        h2 {
            margin-bottom: 10px;
            text-align:center;
        }

        p {
            margin-bottom: 10px;
        }
    }
</style>