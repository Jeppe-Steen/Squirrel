<script setup>
const props = defineProps(['path', 'text']);
</script>

<template>
    <div class="link">
        <NuxtLink :to="props.path">
            <h3>{{ props.text }}</h3>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.link {
    width: 100%;
    background-color: $green;
    margin: 15px 0;

    a {
        text-align: center;
        color: black;
        text-decoration: none;
        width: 100%;
        height: 100%;
    
        h3 {
            font-weight: 500;
            padding: 20px 0;
        }
    }
}
</style>