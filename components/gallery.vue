<template>
    <section class="gallery">
        <div class="container">
            <img src="../assets/image/treatments/ear.webp" alt="ear_acupuncture"/>
            <img src="../assets/image/treatments/foot.webp" alt="foot_acupuncture"/>
            <img src="../assets/image/treatments/fireCupping_1.webp" alt="fire_cupping"/>
            <img src="../assets/image/treatments/head.webp" alt="head_acupuncture"/>
            <img src="../assets/image/treatments/hand.webp" alt="hand_acupuncture"/>
            <img src="../assets/image/treatments/stomach_2.webp" alt="stomach_acupuncture"/>
            <img src="../assets/image/treatments/Pulse.webp" alt="pulse"/>
            <img src="../assets/image/treatments/klinic_1.webp" alt=clinic""/>
            <img src="../assets/image/treatments/klinic_2.webp" alt="clinic"/>
            <img src="../assets/image/treatments/klinic_3.webp" alt="clinic"/>
            </div>
    </section>
</template>

<style lang="scss">
    .gallery{
        width: 100%;
        height: fit-content;
        margin-top: 50px;
        
        .container {
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