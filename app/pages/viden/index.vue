<script setup>
useSeoMeta({
  title: 'Viden om akupunktur, smerter og behandlinger',
  description: 'Læs vores artikler om akupunktur, hovedpine, smerter, stress, myggestik og andre emner. Få viden om behandlinger, forskning og gode råd fra Klinik Egernbo Akupunktur.',
  ogTitle: 'Viden om akupunktur og behandlinger',
  ogDescription: 'Artikler om akupunktur, smerter, stress, forskning og gode råd fra Klinik Egernbo Akupunktur.',
  ogType: 'website',
  ogUrl: 'https://klinikegernboakupunktur.dk/viden',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Viden om akupunktur og behandlinger',
  twitterDescription: 'Læs artikler om akupunktur, behandlinger og sundhed.',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://klinikegernboakupunktur.dk/viden',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Viden om akupunktur',
        description:
          'Artikler om akupunktur, behandlinger og sundhed.',
        url: 'https://klinikegernboakupunktur.dk/viden',
      }),
    },
  ],
})

const { data: articles } = await useAsyncData(() =>
  queryCollection('viden')
    .order('publishedAt', 'DESC') 
    .all()
)

</script>

<template>
    <UiHeader>
        <template #subtitle><strong>Her finder du tidligere opslag som jeg har skrevet</strong></template>
        <template #title><h1>Artikler</h1></template>
    </UiHeader>

    <ul class="article-list">
        <li v-for="(article, index) in articles" :key="index">
            <article>
                <UiCard shadow rounded>
                    <span class="card">
                        <span class="card--content">
                            <UiHeader>
                                <template #subtitle>
                                    <p>{{ article.publishedAt }}</p>
                                </template>
                                <template #title>
                                    <h2>{{ article.title }}</h2>
                                </template>
                            </UiHeader>
                            <p>{{ article.description }}</p>
                            <UiButton label="Læs mere" :to="article.path" />
                        </span>
                        <NuxtImg :src="article.image" height="1200" width="1000"/>
                    </span>
                </UiCard>
            </article>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.article-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    li {
        .card {
            display: grid;
            grid-template-columns: 1fr .3fr;
            gap: 1rem;

            &--content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            img {
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>

