<script setup>
import ancor from './reuseable/ancor.vue';
import { createClient } from '@supabase/supabase-js';

let questions = ref([]);

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey);
async function getQuestions() {
    let { data: question, error } = await supabase.from('faq').select('*');
    if(!error) {
        questions.value = question;
        return;
    }

    return;
};

onMounted(() => {
    getQuestions();
})

</script>

<template>
    <section class="faq-component">
        <ancor path="faq" />
        <div class="faq-component__header">
            <h3>Ofte stillede spørgsmål</h3>
            <h2>FAQ</h2>
        </div>
        <div class="container">
            <article v-for="question in questions" :id="question.id" class="question">
                <h3>{{ question.heading }}</h3>
                <p>{{ question.text }}</p>
                <nuxtLink :to="question.link_path"><p>{{ question.link_text }}</p></nuxtLink>
            </article>
        </div>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;
.faq-component {
    margin: 40px 0;
    width: 100%;
    display: grid;
    grid-template-areas: 
        "header"
        "container"
        "video";
    gap: 40px; 
    grid-template-columns: 1fr;

    @media (min-width: 1200px) {
        grid-template-areas: 
            "header header"
            "container container"
            "video video";
        grid-template-columns: 1fr 1fr;
    }

    &__header {
        grid-area: header;
        text-align: left;

        h2 {
            font-size: 2.5rem;
        }
    }

    .container {
        grid-area: container;
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;

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
                    background-color: $lightGreen;
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