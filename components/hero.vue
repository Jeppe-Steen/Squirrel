<script setup>
import generalText from "../content/json/generalText.json";
const text = generalText.data.hero;

</script>

<template>
    <section class="hero__main">
        <div class="hero__logo-container">
            <img class="hero__logo" src="../assets/svg/egernbo_logo_svg.svg" alt="klinik_egernbo_akupunktur" />
            <h1 class="hero__header">{{ text.header.prime }}</h1>
            <h2 class="hero__sub-header">{{ text.header.sub }}</h2>
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
        display: flex;
        width: 100%;
        height: 50vh;
        background-color: white;
        align-items: center;
        justify-content: center;

        // large screens
        @media (min-width: 1200px) {
            height: 60vh;
            display: grid;
            grid-template-areas: "a b";
            grid-template-columns: 1fr 1fr;
        };
    }
    
    &__logo-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-area: a;
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
        font-style: italic;
        font-family: "Cedarville Cursive", cursive;
        text-transform: inherit;
    }

    &__img-container {
        display: none;
        position: relative;
        grid-area: b;
        overflow: hidden;
        height: 100%;

        // large screens
        @media (min-width: 1200px) {
            display: unset;
        };

        img {
            height: 100%;
            transform: scale(-1, 1);
            position:absolute;
            bottom: 0;
            right: 0;
        }

    }

    &__stripes {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50vh;
        background: repeating-linear-gradient(
            135deg,
            transparent,
            transparent 200px,
            #dddddd20 200px,
            #dddddd20 400px
        );
        box-shadow: 0 0 10px 5px #00000010;
        z-index: 900;

        // large screens
        @media (min-width: 1200px) { height: 60vh; };
    }
}
</style>