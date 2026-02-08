<script setup>
  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  useHead({
    meta: [
        {
          name: "color-scheme",
          content: "light"
        },
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)"
        }
    ],
  }); 
</script>

<template>
    <NuxtLayout>
      <Navigation/>
      <NuxtPage />
      <Footer />
    </NuxtLayout>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

:root {
  color-scheme: light;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open sans', sans-serif;
  scroll-behavior: smooth;
}

@font-face {
  font-family: 'Open sans', sans-serif;
  src: url('/fonts/font.woff2');
  font-display: swap;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
}

h4 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
}
</style>
