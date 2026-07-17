<script setup>
const { data: articles } = await useAsyncData(() =>
  queryCollection('viden').all()
)
</script>

<template>
    <UiHeader>
        <template #subtitle><strong>Her finder du tidligere opslag som jeg har skrevet</strong></template>
        <template #title><h1>Artikler</h1></template>
    </UiHeader>

    <ul class="article-list">
        <li v-for="(article, index) in articles" :key="index">
            <UiCard shadow rounded>
                <span class="card">
                    <span class="card--content">
                        <UiHeader>
                            <template #subtitle>
                                <p>{{ article.meta.publishedAt }}</p>
                            </template>
                            <template #title>
                                <h2>{{ article.title }}</h2>
                            </template>
                        </UiHeader>
                        <p>{{ article.description }}</p>
                        <UiButton label="Læs mere" :to="article.path" />
                    </span>
                    <NuxtImg :src="article.meta.image" height="1200" width="1000"/>
                </span>
            </UiCard>
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

