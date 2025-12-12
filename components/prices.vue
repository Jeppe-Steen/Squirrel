<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.prices;
</script>

<template>
    <section class="prices">
        <article v-for="treatment in text.treatments">
            <h2>{{ treatment.name }}</h2>
            <h4>{{ treatment.price }}</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis consequatur qui nulla repudiandae ex tempore iusto adipisci necessitatibus sequi cum reiciendis blanditiis, quibusdam voluptatem optio, fugit molestias iure quam?</p>
        </article>
    </section>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

    .prices {
        width: 100%;
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 30px;

        article {
            height: 100%;
            border-radius: 20px;
            width: 80%;
            background-color: white;
            box-shadow: 0 0 10px 5px #00000010;
            display: flex;
            align-items: center;
            flex-direction: column;
            position: relative;
            overflow: hidden;

            h2 {
                width: 100%;
                padding: 20px 0;
                background-color: $lightGreen;
                text-align: center;
            }
            
            h4 {
                width: 100%;
                text-align: center;
                padding: 50px 0;
            }
            
            p {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 20px;
            }
        }
    }
</style>