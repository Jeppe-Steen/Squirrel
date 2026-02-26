<script setup>
import {defineProps} from 'vue';
const props = defineProps(['path']);
</script>

<template>
    <span class="ancor-component" :id="props.path"></span>
</template>

<style lang="scss" scoped>
    .ancor-component {
        display: block;
        position: relative;
        top: -100px;
        visibility: hidden;
    }
</style>