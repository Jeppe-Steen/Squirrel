<script lang="ts" setup>
import data from '../content/reviews.json';
</script>
<template>
    <UiHeader description="Hvad siger mine kunder?">
        <template #header>
            <h1>Anbefalinger</h1>
        </template>
    </UiHeader>

    <iframe class="video" src="https://www.youtube.com/embed/ZsqNsdmy29c?controls=1" title="youtube_video"></iframe>

    <section class="content">
        <div class="content--card" v-for="(review, index) in data.reviews" :key="index">
            <UiHeader description="trustpilot">
                <template #header>
                    <h3>{{ review.name }}</h3>
                </template>
            </UiHeader>

            <p v-for="(text, index) in review.text" :key="index">{{ text }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .video {
        height: 450px;
    }

    .content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }

        &--card {
            width: 100%;
            height: fit-content;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            box-shadow: 0px 0px 20px #00000050;
        }
    }
</style>