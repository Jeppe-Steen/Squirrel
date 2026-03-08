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
                    <header class="review__header">
                        <div class="left">
                            <h4>{{ review.name }}</h4>
                            <p>{{ review.from }}</p>
                        </div>
                        <div class="right">
                            <svg v-for="star in review.stars" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.12 9.88005C21.0781 9.74719 20.9996 9.62884 20.8935 9.53862C20.7873 9.4484 20.6579 9.38997 20.52 9.37005L15.1 8.58005L12.67 3.67005C12.6008 3.55403 12.5027 3.45795 12.3853 3.39123C12.2678 3.32451 12.1351 3.28943 12 3.28943C11.8649 3.28943 11.7322 3.32451 11.6147 3.39123C11.4973 3.45795 11.3991 3.55403 11.33 3.67005L8.89999 8.58005L3.47999 9.37005C3.34211 9.38997 3.21266 9.4484 3.10652 9.53862C3.00038 9.62884 2.92186 9.74719 2.87999 9.88005C2.83529 10.0124 2.82846 10.1547 2.86027 10.2907C2.89207 10.4268 2.96124 10.5512 3.05999 10.6501L6.99999 14.4701L6.06999 19.8701C6.04642 20.0091 6.06199 20.1519 6.11497 20.2826C6.16796 20.4133 6.25625 20.5267 6.36999 20.6101C6.48391 20.6912 6.61825 20.7389 6.75785 20.7478C6.89746 20.7566 7.03675 20.7262 7.15999 20.6601L12 18.1101L16.85 20.6601C16.9573 20.7189 17.0776 20.7499 17.2 20.7501C17.3573 20.7482 17.5105 20.6995 17.64 20.6101C17.7537 20.5267 17.842 20.4133 17.895 20.2826C17.948 20.1519 17.9636 20.0091 17.94 19.8701L17 14.4701L20.93 10.6501C21.0305 10.5523 21.1015 10.4283 21.1351 10.2922C21.1687 10.1561 21.1634 10.0133 21.12 9.88005Z" fill="#EFBF04"/>
                            </svg>
                        </div>
                    </header>
                    <p>"{{ review.text[0].slice(0, 200) }}..."</p>
                    <button v-if="review.text[0].length > 300" class="read-more" @click="handleClick(review, true)">Læs den fulde anmeldelse her</button>
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
    grid-template-columns: 1fr;
    gap: 40px;
    grid-template-areas: 
    'header'
    'video'
    'reviews';
    
    // large screens
    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
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
            height: 350px;
            overflow: hidden;

            @media (min-width: 1200px) {
                height: 300px;
            }

            &__header {
                display: flex;
                margin-bottom: 10px;
                flex-direction: column;
                justify-content: unset;

                @media (min-width: 1200px) {
                    flex-direction: row;
                    justify-content: space-between;
                }

                .left {
                    p {
                        text-transform: capitalize;
                    }
                }
                .right {
                    svg {
                        width: 20px;
                        height: fit-content
                    }
                }
            }

            button {
                padding: 10px;
                //margin: 10px 0;
                background-color: $lightGreen;
                border: none;
                margin-top: auto;
                
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