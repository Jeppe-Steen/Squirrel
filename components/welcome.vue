<script setup>
const props = defineProps({
    text: {
        type: Object,
        required: true
    }
});

//tilføjer lige dette

</script>

<template>
    <section class="welcome__main">
        <h2>{{ props.text.header }}</h2>
        <p>{{ props.text.text }}</p>
    </section>
</template>

<style lang="scss">
    .welcome__main {
        width: 100%;
        height: fit-content;
        text-align: center;
        margin: 50px 0;

        h2 {
            margin-bottom: 20px;
        }
    }
</style>