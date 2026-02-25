<script setup>
import ancor from './reuseable/ancor.vue';
import generalText from "../content/json/generalText.json";
const text = generalText.data.FAQ;
</script>

<template>
    <section class="faq">
        <ancor path="faq" />
        <h2>{{ text.header }}</h2>
        <div class="container">
            <article v-for="item in text.questions" class="question">
                <h3>{{item.header}}</h3>
                <p>{{ item.text }}</p>
                <nuxtLink :to="item.link"><p>{{ item.linkText }}</p></nuxtLink>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;
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
            height: fit-content;

            h3 {
                margin-bottom: 10px;
            }

            a {
                text-decoration: none;

                p {
                    background-color: $green;
                    text-align:center;
                    padding: 10px;
                    margin-top:20px;
                    color: black;
                }

                
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}
</style>