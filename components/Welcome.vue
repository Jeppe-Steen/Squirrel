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
        <h1>{{ props.text.header }}</h1>
        <p v-for="(text, index) in props.text.text" :key="index">{{ text }}</p>
    </section>
</template>

<style lang="scss">
    .welcome__main {
        width: 100%;
        height: fit-content;
        text-align: center;
        margin: 50px 0;

        h1 {
            font-size: 1.5rem;
            margin-bottom: 20px;
            width: 100%;
            text-align: center;
        }

        p {
            margin-bottom: 10px;
            width: 100%;
            text-align:left;
        }
    }
</style>
