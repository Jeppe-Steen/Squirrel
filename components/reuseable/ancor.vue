<script setup>
import {defineProps} from 'vue';
const props = defineProps(['path']);
</script>

<template>
    <span class="ancor" :id="props.path"></span>
</template>

<style lang="scss">
    .ancor {
        display: block;
        position: relative;
        top: -100px;
        visibility: hidden;
    }
</style>