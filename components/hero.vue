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

<style lang="scss">
.hero {
&__main {
    display: grid;
    width: 100%;
    height: 80vh;
    background-color: white;
    grid-template-areas: "a b";
    grid-template-columns: 1fr 1fr;
}
&__logo-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
&__logo {
    width: 300px;
    margin-bottom: 10px;
}
&__header {
    text-transform: uppercase;
    background: radial-gradient(#D2B379, #A17A46);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    font-style: bold;
}
&__sub-header {
    font-size: 1.5rem;
    font-style: italic;
    font-family: "Cedarville Cursive", cursive;
    text-transform: inherit;
}

&__img-container {
    grid-area: b;
    /* background-color: bisque; */
    overflow: hidden;
}

&__img {
    height: 100%;
    transform: scale(-1, 1);
}

&__stripes {
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
        box-shadow: 0 2px 6px #00000030;
}
}
</style>