<template>
    <section class="gallery">
        <div class="container">
            <img src="../assets/image/treatments/AdobeStock_1.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_2.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_3.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_4.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_5.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_6.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_7.jpeg"/>
            <img src="../assets/image/treatments/AdobeStock_1.jpeg"/>
            </div>
    </section>
</template>

<style lang="scss">
    .gallery{
        width: 100%;
        height: fit-content;
        
        .container {
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 20px;

            // large screens
            @media (min-width: 1200px) { 
                padding: 0;
                grid-template-columns: repeat(3, 1fr);
            };

            img {
                width: 100%;
                 box-shadow: 0 0 10px 5px #00000010;
            }
        }
    }
</style>