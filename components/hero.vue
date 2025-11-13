<script setup lang="ts">
</script>

<template>
    <section class="hero__main">
        <div class="hero__logo-container">
            <img class="hero__logo" src="../assets/svg/egernbo_logo_svg.svg" alt="klinik_egernbo_akupunktur" />
            <h1 class="hero__header">Klinik Egernbo</h1>
            <h2 class="hero__sub-header">Akupunktur</h2>
        </div>
        <div class="hero__img-container">
            <img class="hero__img" src="../assets/image/hero-image.png" alt="neck_acupuncture">
        </div>

        <div class="hero__stripes"></div>
    </section>
</template>

<style>
.hero__main {
    display: grid;
    width: 100%;
    height: 80vh;
    background-color: white;
    box-shadow: 0 2px 6px #00000030;
    grid-template-areas: "a b";
    grid-template-columns: 1fr 1fr;
}
.hero__logo-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-area: a;
    /* background-color: lightgoldenrodyellow; */
}
.hero__logo {
    width: 300px;
    margin-bottom: 10px;
}
.hero__header {
    text-transform: uppercase;
    background: radial-gradient(#D2B379, #A17A46);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-style: bold;
}
.hero__sub-header {
    font-size: 1.5rem;
    font-style: italic;
    font-family: "Momo Signature", cursive;
}

.hero__img-container {
    grid-area: b;
    /* background-color: bisque; */
    overflow: hidden;
}

.hero__img {
    height: 100%;
    transform: scale(-1, 1);
}

.hero__stripes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    background: repeating-linear-gradient(
        135deg,
        transparent,
        transparent 200px,
        #dddddd20 200px,
        #dddddd20 400px
    );
}
</style>