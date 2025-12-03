<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.about;
</script>

<template>
    <section class="about">
        <article>
            <h2>{{ text.header }}</h2>
            <p v-for="text in text.text"> {{ text }}</p>
        </article>
    </section>
</template>

<style lang="scss">
    .about {
        margin-top: 50px;
        width: 100%;
        height: 600px;
        background-image: url("../assets/image/Akupunktur.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;

        article {
            position: absolute;
            right: 50px;
            height: 100%;
            width: 55%;
            background-color: #ffffff90;
            padding: 60px 20px;
            
            h2, p {
                margin-bottom: 20px;
            }
        }
    }
</style>