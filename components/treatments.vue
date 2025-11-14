<script setup>
const treatments = [
    {
        name: "Akupunktur",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "Akupunktur"
    },
    {
        name: "Moxa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "moxa"
    },
    {
        name: "Auriculoterapi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "ear"
    },
    {
        name: "TENS",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "tens"
    },
    {
        name: "Cupping & GuaSha",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dolor, corrupti ab molestias blanditiis esse facilis aliquid, ipsa voluptatibus vel quae obcaecati? Facere nulla quidem voluptatibus aut provident aspernatur.",
        image: "fire_cupping"
    }
]
</script>
<template>
    <section class="treatments__main">
        <h2>Her kan du se mere om hvad jeg tilbyder af behandlinger</h2>
        <div class="treatments__container">
            <ul class="left">
                <li v-for="{name, image} in treatments">
                    <h3>{{ name }}</h3>
                    <img :src="`../assets/image/${image}.jpg`" :alt="name">
                </li>
            </ul>
            <div class="right">
                <div></div>
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
            margin-bottom: 10px;
            text-transform: uppercase;
        }
    }
    &__container {
        width:100%;

        .left {
            grid-area: left;
        }

        .right {
            grid-area: right;
        }

        ul {
            display: flex;
            flex-direction: row;
            text-align: center;

            li {
                margin: 0 10px;
                width: calc(100% / 5);
                background-color: lightgreen;
                height: fit-content;
                
                list-style: none;

                h3 {
                    margin-bottom: 10px;
                    background-color: #C0DEED;
                    padding: 10px;
                }
                img {
                    width: 100%;
                }
            }
        }
    }

}
</style>