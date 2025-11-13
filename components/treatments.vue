<script setup>
    const treatments = [
        {name: "Nåleakupunktur"},
        {name: "Moxa/varmene urter"},
        {name: "Auriculoterapi/øre akupunktur"},
        {name: "TENS"},
        {name: "Fire cupping og moving cupping"},
    ]
</script>

<template>
    <section class="treatmens__main">
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <div class="treatments__container">
            <ul>
                <li> heeey</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
            <div></div>
        </div>
    </section>
</template>

<style lang="scss">
    .treatmens {
        &__main {
        width: 100%;
        height: 70vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 80px;
        }

        &__container {
            width: 100px;
            height: 100px;
        }
    }
</style>