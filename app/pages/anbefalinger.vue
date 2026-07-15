<script lang="ts" setup>
useSeoMeta({
  title: 'Anbefalinger',
  description:
    'Professionel akupunktur i Aabybro og Nordjylland. Behandling mod smerter, stress, migræne og meget mere.',
  ogTitle: 'Klinik Egernbo Akupunktur',
  ogDescription:
    'Professionel akupunktur i Aabybro.',
  ogUrl: 'https://klinikegernboakupunktur.dk/',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Klinik Egernbo Akupunktur',
  twitterDescription: 'Professionel akupunktur i Aabybro.',
})
import data from '../content/reviews.json';

const expanded = ref<Record<number, boolean>>({})

const toggleExpanded = (index: number) => {
  expanded.value[index] = !expanded.value[index]
}

const isExpanded = (index: number) => {
  return !!expanded.value[index]
}

const visibleText = (review: any, index: number) => {
  if (isExpanded(index)) {
    return review.text
  }

    return review.text
    .slice(0, 1)
    .map((text: string) =>
        text.length > 200
        ? text.slice(0, 200) + '...'
        : text
    );
}

const canExpand = (review: any) => {
  return review.text.length > 1 ||
         review.text[0]?.length > 200
}
</script>

<template>
    <UiHeader>
        <template #subtitle>
            <strong>Hvad siger mine kunder?</strong>
        </template>
        <template #title>
            <h1>Anbefalinger</h1>
        </template>
    </UiHeader>

    <iframe class="video" src="https://www.youtube.com/embed/ZsqNsdmy29c?controls=1" title="youtube_video"></iframe>

    <section class="content">
        <UiCard shadow rounded v-for="(review, index) in data.reviews" :key="index">
            <UiHeader :icon="{name: 'star', count: review.stars, size: 20, color: '#FFD700'}">
                <template #subtitle>
                    <strong>{{ review.from }}</strong>
                </template>
                <template #title>
                    <h3>{{ review.name }}</h3>
                </template>
            </UiHeader>

            <p v-for="(text, i) in visibleText(review, index)" :key="i">
                {{ text }}
            </p>

            <UiButton v-if="canExpand(review)" :label="isExpanded(index) ? 'Vis mindre' : 'Læs mere'" @click="toggleExpanded(index)"/>
        </UiCard>
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