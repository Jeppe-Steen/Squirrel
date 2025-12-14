<script setup>
import ancor from './reuseable/ancor.vue';
import generalText from "../content/json/generalText.json";
const text = generalText.data.FAQ;
</script>

<template>
    <section class="faq">
        <ancor path="FAQ" />
        <h2>{{ text.header }}</h2>
        <div class="container">
            <article v-for="item in text.questions" class="question">
                <h3>{{item.header}}</h3>
                <p>{{ item.text }}</p>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
.faq {
    margin-top: 50px;
    
    h2 {
        text-align: center;
        padding: 20px 0;
        background-color: white;
        box-shadow: 0 0 10px 5px #00000030;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 20px;

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
        
        .question {
            background-color: white;
            box-shadow: 0 0 10px 5px #00000030;
            padding: 20px;

            h3 {
                margin-bottom: 10px;
            }
        }
    }
}
</style>