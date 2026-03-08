<script setup>
import { createClient } from '@supabase/supabase-js'
const publishedReviews = ref([]);

import { modal } from '../composable/model.js';
const { showModal, setModalContent } = modal();

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey);
async function getReviews() {
    let { data: reviews, error } = await supabase.from('reviews').select('*').eq('published', true);
    if(!error) {
        publishedReviews.value = reviews;
        return;
    }

    return;
};

onMounted(() => {
    getReviews()
})

const handleClick = (data, bool) => {
    setModalContent(data);
    showModal(bool);
}
</script>

<template>
    <main class="reviews">
        <section class="reviews__container">
            <header class="header">
                <h3>Hvad siger mine kunder?</h3>
                <h1>Anmeldelser</h1>
            </header>

            <div class="content">
                <article v-for="review in publishedReviews" :key="review.id" class="review">
                    <p>"{{ review.text[0].slice(0, 300) }}..."</p>
                    <button v-if="review.text[0].length > 300" class="read-more" @click="handleClick(review, true)">Læs den fulde anmeldelse her</button>
                    <span>- {{ review.name }}</span>
                </article>
            </div>

            <iframe class="video" src="https://www.youtube.com/embed/ZsqNsdmy29c?controls=1"></iframe>
        </section>
    </main>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;
.reviews {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  background-color: white;

  @media (min-width) {
    margin-top: 10vh;
  }

  &__container {
    width: 100%;
    height: fit-content;
    background-color: transparent;
    z-index: 90;
    padding: 0 20px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    grid-template-areas: 
    'header'
    'video'
    'reviews';
    
    // large screens
    @media (min-width: 1200px) {
        width: 60%;
        padding: unset;
        grid-template-areas: 
        'header header'
        'video video'
        'reviews reviews';
    };

    .header {
        grid-area: header;
        height: fit-content;
    }
    
    .content {
        grid-area: reviews;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        .review {
                display: flex;
                flex-direction: column;
                background-color: white;
                box-shadow: 0 0 10px 5px #00000030;
                padding: 20px;
                height: fit-content;

                button {
                    padding: 10px;
                    margin: 10px 0;
                    background-color: $lightGreen;
                    border: none;
                    
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
    }

    .video {
        grid-area: video;
        width: 100%;
        min-height: 400px;;
    }
  }
}
</style>