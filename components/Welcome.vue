<script setup>
const props = defineProps({
    text: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <section class="welcome__main">
        <h1 class="welcome__main--header">{{ props.text.header }}</h1>
        <div class="welcome__main--text">
            <p v-for="(text, index) in props.text.text" :key="index">{{ text }}</p>
        </div> 
        <div class="welcome__main--image">
            <img src="../assets/image/treatments/fireCupping_1.webp" />
        </div> 
    </section>
</template>

<style lang="scss">
    .welcome__main {
        width: 100%;
        height: fit-content;
        text-align: center;
        margin: 50px 0;
        display: grid;
        grid-template-areas: 
            "header header"
            "text image";
        grid-template-columns: 1fr 1fr;
        gap: 30px;

        &--header {
            grid-area: header;

            h1 {
                font-size: 1.5rem;
                margin-bottom: 20px;
                width: 100%;
                text-align: center;
            }
        }

        &--text {
            grid-area: text;
            p {
                margin-bottom: 10px;
                width: 100%;
                text-align:left;
            }
        }

        &--image {
            grid-area: image;
            overflow: hidden;

            img {
                border-radius: 50px;
                width: 100%;
            }
        }
    }
</style>
