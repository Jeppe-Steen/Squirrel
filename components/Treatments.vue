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
    <section class="treatments-component">
        <h2>{{ text.header }}</h2>
        <div class="treatments-component__container">
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

            <article class="treatment" style="backgroundColor:#51614b" @click="selectTreatment(4)" :class="{active: selectedTreatment === 4}">
                <h3>Cupping</h3>
            </article>
        </div>

        <NuxtLink to="/behandlinger"><p class="treatment_link">Læs mere om behandlingerne her!</p></NuxtLink>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.treatments-component {
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
        flex-direction: column;

        // large screens
        @media (min-width: 1200px) {
            flex-direction: row;
        };

        width: 100%;

        .treatment {
            width: 100%;
            height: 100px;
            overflow: hidden;
            position: relative;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            // large screens
            @media (min-width: 1200px) {
                width: 20%;
                height: 400px;
            };

            &.active {
                width: 100%;
                height: 200px;
                background-color:lightblue !important;

                // large screens
                @media (min-width: 1200px) {
                    height: 400px;
                    width: 40%;
                };
                
                h3 {
                    position: absolute;
                    transform: rotate(0deg);
                    bottom: 50px;
                }
            }
            
            &:hover {
                cursor: pointer;
            }

            h3 {
                transform: unset;
                font-size: 1.5rem;  

                // large screens
                @media (min-width: 1200px) {
                    transform: rotate(-90deg);
                    font-size: 2rem;
                };
            }

        }
    }

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center; 
        width: 100%;  
         
        .treatment_link {
            margin-top: 50px;
            width: 100%;
            padding: 10px 50px;
            background-color: $green;
            border-radius: 20px;

            color: black;
            text-align: center;
            box-shadow: 0 0 10px 5px #00000030;
        
            &:hover {
                cursor: pointer;
            }

            //large screens
            @media (min-width: 1200px) {
                width: 80%;
            };
        }
    }
}
</style>
