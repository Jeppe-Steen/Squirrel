<script setup>
const route = useRoute()

const { data: article } = await useAsyncData(() => {
  return queryCollection('viden')
    .path(route.path)
    .first()
});
</script>

<template>
  <section class="content-wrapper">
    <ContentRenderer :value="article" />
  </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-position: inside;
  }
}
</style>