<script setup>
import { computed, ref } from 'vue'
const treatments = [
    {
        name: "Akupunktur",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "Akupunktur"
    },
    {
        name: "Moxa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "Akupunktur"
    },
    {
        name: "Auriculoterapi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "Akupunktur"
    },
    {
        name: "TENS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "Akupunktur"
    },
    {
        name: "Cupping & GuaSha",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "Akupunktur"
    }
]

let selected_treatment = ref(0);

const selectTreatment = computed((index) => {
    return selected_treatment.value = index;
});

</script>
<template>
    <section class="treatments__main">
        <h2>Her kan du se mere om hvad jeg tilbyder af behandlinger</h2>
        <div class="treatments__container">
            <ul>
                <li v-for="(treatment, i) in treatments" :class="{active: selected_treatment == i}" @click="selectTreatment(i)">
                    <h3>{{ treatment.name }}</h3>
                    <img src="../assets/image/Akupunktur.jpg" :alt="treatment.name">
                </li>
            </ul>
            <div class="treatment__description">
                <p>Auriculoterapi er en anderledes form for nåleterapi, da det hele foregår i øret. Øret, ligesom så mange andre steder på kroppen, er et mikrosystem der afspejler resten af kroppens tilstand, og ligeledes kan man også behandle hele kroppen i øret alene.
Her anvendes ligeledes nåle som til akupunktur (bare kortere), samt ørefrø og permanåle.
Fordelene ved auriculoterapi er bl.a. at behandlingen kan forlænges ved brug af ørefrø og permanåle, da klienten beholder dem i efter behandlingen. Derudover er det en måde at få behandling på, hvis man er nervøs for rigtig akupunktur.
Auriculoterapi anvender jeg ofte kun som supplement til akupunkturbehandlingerne.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.treatments{
    &__main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: white;
        padding: 50px;
        border-radius: 50px;

        h2 {
            margin-bottom: 30px;
            text-transform: uppercase;
        }
    }
    &__container {
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
            display: flex;
            flex-direction: row;
            text-align: center;
            cursor: pointer;

            .active {
                transform: scale(1.1);
            }

            li {
                margin: 0 10px;
                width: calc(100% / 5);
                height: fit-content;
                border: 1px solid black;
                
                list-style: none;

                h3 {
                    margin-bottom: 10px;
                    padding: 10px;
                }
                img {
                    width: 100%;
                }
            }
        }

        .treatment__description {
            background-color: lightcoral;
            margin-top: 20px;
            width: 50%;
        }
    }

}
</style>