<script setup>
const props = defineProps({
    text: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <section class="welcome__component">
        <div class="welcome__component--header">
            <h2>{{ props.text.header }}</h2>
            <h1>{{ props.text.subheader }}</h1>
        </div>
        <div class="welcome__component--text">
            <p v-for="(text, index) in props.text.text" :key="index">{{ text }}</p>
        </div> 
        <div class="welcome__component--image">
            <NuxtImg src="../assets/image/treatments/fireCupping_1.webp" />
        </div> 
    </section>
</template>

<style lang="scss" scoped>
    .welcome__component {
        width: 100%;
        height: fit-content;
        text-align: center;
        margin: 50px 0;
        display: grid;
        grid-template-areas: 
            "header"
            "text"
            "image";
        grid-template-columns: 1fr;
        gap: 40px;

        @media (min-width: 1200px) {
            grid-template-areas: 
                "header header"
                "text image";
            grid-template-columns: 1fr 1fr;  
        }

        &--header {
            grid-area: header;

            h1 {
                font-size: 2.5rem;
                width: 100%;
                text-align: center;
            }

            h2 {
                font-size: 1.5rem;
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
