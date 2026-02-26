<script setup>
const props = defineProps(['title', 'text', 'subTitle']);

</script>

<template>
    <section class="treatment-component">
        <header class="treatment-component__header">
            <h3>{{ props.subTitle }}</h3>
            <h2>{{ props.title}}</h2>
        </header>

        <div v-for="item in props.text">
            <p v-if="!Array.isArray(item)">{{ item }}</p>
            <ul v-else>
                <li v-for="subItem in item">{{ subItem }}</li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;
    .treatment-component {
        width: 100%;
        height: fit-content;
        text-align: left;
        background-color: $lightestGreen;
        box-shadow: 0 0 10px 5px #00000030;
        padding: 20px;

        &__header {
            margin-bottom: 20px;
        }

        p:not(:last-child) {
            margin-bottom: 10px;
        }

        ul {
            padding-left: 20px; 
            margin-bottom: 20px;
        }
    }
</style>