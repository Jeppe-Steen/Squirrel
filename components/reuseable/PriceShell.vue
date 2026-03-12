<script setup>
const props = defineProps(['id', 'type', 'heading', 'text', 'price', 'duration', 'discount', 'discount_price', 'discount_procent']);
</script>

<template>
    <article :key="props.id" class="priceShell-component">
                <header class="priceShell-component__header">
                    <h3>{{ props.heading }}</h3>

                    <div v-if="props.discount" class="discount">
                        <p>-{{ props.discount_procent }}%</p>
                    </div>

                    <div v-if="props.discount" class="priceShell-component__price">
                        <h2>{{ props.discount_price }} DKK</h2>
                        <h2 class="discounted"> {{ props.price }} DKK</h2>
                    </div>

                    <div v-else class="priceShell-component__price">
                        <h2>{{ props.price }} DKK</h2>
                    </div>
                </header>

                <div v-if="props.text || props.duration" class="priceShell-component__text">
                    <h3>Dette indeholder:</h3>
                    <ul>
                        <li v-if="props.text" v-for="text in props.text" :key="text">{{ text }}</li>
                        <li v-if="props.duration">Varighed ca. {{ props.duration }} min</li>
                    </ul>
                </div>

                <!-- <NuxtLink to="/kontakt"><p>Kontakt mig her</p></NuxtLink> -->
            </article>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.priceShell-component {
    width: 100%;
    background-color: $lightGreen;
    margin-top: 20px;
    padding: 20px;
    height: fit-content;

    &__header {
        margin-bottom: 10px;
        position: relative;

         .discount {
            position: absolute;
            top: 0;
            right: 0;
            background-color: $darkGreen;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }

    &__price {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (min-width: 1200px) {
            flex-direction: row;
            align-items: center;
        }
        
        .discounted {
            text-decoration: line-through;
            color: gray;
            margin-left: 20px;
            font-size: 1.8rem;
        }
    }

    &__text {
        ul {
            list-style: none;
        }
    }

    a {
        width: 100%;
        text-decoration: none;
        text-align: center;

        p {
            background-color: $lightestGreen;
            box-shadow: 0 0 10px 5px #00000030;
            padding: 10px;
            margin-top: 20px;
            color: black;
            font-weight: bold;
        }
    }
}
</style>