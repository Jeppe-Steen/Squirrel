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
    { src: ear_acupuncture, alt: "Billede_af_øre_akupunktur" },
    { src: foot_acupuncture, alt: "Billede_af_fod_akupunktur" },
    { src: fire_cupping, alt: "Billede_af_ild_kupping" },
    { src: head_acupuncture, alt: "Billede_af_hoved_akupunktur" },
    { src: hand_acupuncture, alt: "Billede_af_hånd_akupunktur" },
    { src: stomach_acupuncture, alt: "Billede_af_mave_akupunktur" },
    { src: pulse, alt: "Billede_af_pulse_diagnose" },
    { src: clinic_1, alt: "Billede_af_klinik" },
    { src: clinic_2, alt: "Billede_af_klinik" },
    { src: clinic_3, alt: "Billede_af_klinik" }
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
