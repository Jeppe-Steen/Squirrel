<script setup>
import { createClient } from '@supabase/supabase-js'
import { modal } from '../composable/model.js';
const { showModal, setModalContent } = modal();
const showVideo = ref(true);
const featuredReviews = ref([]);

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabasePublishableKey);
async function getReviews() {
    let { data: reviews, error } = await supabase.from('reviews').select('*').eq('featured', true);
    if(!error) {
        featuredReviews.value = reviews;
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
    <section class="reviews-component">
        <div class="reviews-component__header">
            <h3>Hvad siger mine kunder?</h3>
            <h2>Anmeldelser</h2>
        </div>
        <div class="reviews-component__container">
            <article v-for="review in featuredReviews" :key="review.id" class="review">
                <p>"{{ review.text[0].slice(0, 300) }}..."</p>
                <button v-if="review.text[0].length > 300" class="read-more" @click="handleClick(review, true)">Læs den fulde anmeldelse her</button>
                <span>- {{ review.name }}</span>
            </article>
        </div>

        <!-- <video class="reviews-component__video" controls poster="../assets/image/placeholder.png">
            <source type="video/mp4">
        </video> -->

        <iframe v-if="showVideo" class="reviews-component__video" src="https://www.youtube.com/embed/ZsqNsdmy29c?controls=1"></iframe>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

    .reviews-component {
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

        &__container {
            grid-area: container;
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr 1fr;
            }

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

        &__video {
            grid-area: video;
            width: 100%;
            height: fit-content;
            min-height: 300px;
            box-shadow: 0 0 10px 5px #00000030;

            @media (min-width: 1200px) {
                min-height: 500px;
            }
        }
    }
</style>