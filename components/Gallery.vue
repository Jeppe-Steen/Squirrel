<script setup>
import ear_acupuncture from "../assets/image/treatments/ear.webp";
import foot_acupuncture from "../assets/image/treatments/foot.webp";
import fire_cupping from "../assets/image/treatments/fireCupping_1.webp";
import head_acupuncture from "../assets/image/treatments/head.webp";
import hand_acupuncture from "../assets/image/treatments/hand.webp";
import stomach_acupuncture from "../assets/image/treatments/stomach_2.webp";
import pulse from "../assets/image/treatments/Pulse.webp";
import clinic_1 from "../assets/image/treatments/klinic_1.webp";
import clinic_2 from "../assets/image/treatments/klinic_2.webp";
import clinic_3 from "../assets/image/treatments/klinic_3.webp";

const images = [
    { src: ear_acupuncture, alt: "ear_acupuncture" },
    { src: foot_acupuncture, alt: "foot_acupuncture" },
    { src: fire_cupping, alt: "fire_cupping" },
    { src: head_acupuncture, alt: "head_acupuncture" },
    { src: hand_acupuncture, alt: "hand_acupuncture" },
    { src: stomach_acupuncture, alt: "stomach_acupuncture" },
    { src: pulse, alt: "pulse" },
    { src: clinic_1, alt: "clinic_1" },
    { src: clinic_2, alt: "clinic_2" },
    { src: clinic_3, alt: "clinic_3" }
];

</script>

<template>
    <section class="gallery-component">
        <div class="gallery-component__container">
            <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" loading="lazy" decoding="async"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .gallery-component {
        width: 100%;
        height: fit-content;
        margin-top: 50px;
        
        &__container {
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;

            // large screens
            @media (min-width: 1200px) { 
                grid-template-columns: repeat(3, 1fr);
            };

            img {
                width: 100%;
                box-shadow: 0 0 10px 5px #00000030;
            }
        }
    }
</style>
