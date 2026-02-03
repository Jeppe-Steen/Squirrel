<script setup>
import { ref } from 'vue'
import generalText from "../content/json/generalText.json";
const text = generalText.data.treatments;
const selectedTreatment = ref(0);

const selectTreatment = async (value) => {
    return selectedTreatment.value = value;
};

</script>


<template>
    <section class="treatments">
        <h2>{{ text.header }}</h2>
        <div class="treatments__container">
            <article class="treatment" style="backgroundColor:#A1BC98" @click="selectTreatment(0)" :class="{active: selectedTreatment === 0}">
                <h3>Akupunktur</h3>
            </article>

            <article class="treatment" style="backgroundColor:#92aa8a" @click="selectTreatment(1)" :class="{active: selectedTreatment === 1}">
                <h3>Moxa</h3>
            </article>
            
            <article class="treatment" style="backgroundColor:#7d9376" @click="selectTreatment(2)" :class="{active: selectedTreatment === 2}">
                <h3>Auriculoterapi</h3>
            </article>

            <article class="treatment" style="backgroundColor:#63755d" @click="selectTreatment(3)" :class="{active: selectedTreatment === 3}">
                <h3>TENS</h3>
            </article>

            <article class="treatment" style="backgroundColor:#4c5b47" @click="selectTreatment(4)" :class="{active: selectedTreatment === 4}">
                <h3>Cupping</h3>
            </article>
        </div>

        <NuxtLink to="/behandlinger">Læs mere om behandlingerne her!</NuxtLink>
    </section>
</template>
<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.treatments {
    margin-top: 50px;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;

    // large screens
    @media (min-width: 1200px) {
        margin-top: 0;
        border-radius: 20px;
    };


    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    &__container {
        display: flex;
        align-items:center;
        flex-direction: row;

        width: 100%;

        .treatment {

            &.active {
                width: 40%;
                background-color:lightblue !important;
                
                h3 {
                    position: absolute;
                    transform: rotate(0deg);
                    bottom: 50px;
                }
            }

            width: 20%;
            height: 400px;
            overflow: hidden;
            position: relative;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            &:hover {
                cursor: pointer;
            }

            h3 {
                transform: rotate(-90deg);
                font-size: 2rem;
            }

        }
    }

    a {
        margin-top: 30px;
        padding: 10px 50px;
        background-color: $green;
        border-radius: 20px;
        text-decoration: none;
        color: black;
        box-shadow: 0 0 10px 5px #00000030;
        
        &:hover {
            cursor: pointer;
        }
    }
}
</style>