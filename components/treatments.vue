<script setup>
import { ref, computed } from 'vue'
import generalText from "../content/json/generalText.json";
const text = generalText.data.treatments;
const selectedTreatment = ref(0);

const selectTreatment = async (index) => {
    return selectedTreatment.value = index;
};



</script>


<template>
    <section class="treatments">
        <h2>{{ text.header }}</h2>
        <div class="treatments__container">
            <ul class="treatments__container--list">
                <li v-for="(treatments, index) in text.treatments" @click="selectTreatment(index)" :class="{selected: selectedTreatment === index}"> <p>{{ treatments.name }}</p> </li>
            </ul>

            <div class="treatments__container--description">
                <h3>{{ text.treatments[selectedTreatment].name }}</h3>
                <div v-for="selectedText in text.treatments[selectedTreatment].description">
                    <p v-if="!Array.isArray(selectedText)"> {{ selectedText }}</p>
                    <ul v-else-if="Array.isArray(selectedText)">
                        <li v-for="value in selectedText"> {{ value }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.treatments {
    width: 100%;
    height: fit-content;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px #00000010;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        text-align: center;
        margin: 20px;
    }

    &__container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin: 20px;
        min-height: 300px;

        &--list {
            width: 30%;
            padding: 0 20px;

            li {
                list-style: none;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                justify-content: center;
                height: 40px;
                width: 100%;
                margin: 10px 0;
                background-color: $lightestGreen;
            }

            .selected {
                background-color: $green;
            }
        }

        &--description {
            width: 70%;
            
            p, ul, h3 {
             margin-bottom: 5px;
            }

            ul {
                padding-left: 20px;
            }
        }
    }
}
</style>