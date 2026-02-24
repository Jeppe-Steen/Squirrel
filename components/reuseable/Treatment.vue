<script setup>
const props = defineProps(['title', 'text']);

</script>

<template>
    <section class="treatment__main">
        <h2>{{ props.title}}</h2>
        <div class="container">
            <div>
                <div v-for="item in props.text">
                    <p v-if="!Array.isArray(item)">{{ item }}</p>
                    <ul v-else>
                        <li v-for="subItem in item">{{ subItem }}</li>
                    </ul>
                </div>
            </div>
            <img src="../../assets/image/treatments/foot.webp"/>
        </div>
    </section>
</template>

<style lang="scss">
    .treatment__main {
        width: 100%;
        height: fit-content;
        text-align: left;
        margin: 50px 0;

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;

            h2 {
                margin-bottom: 20px;
            }

            p {
                margin-bottom: 10px;
            }

            ul {
                padding-left: 20px; 
                margin-bottom: 20px;
            }
            
            img {
                width: 100%;
                overflow: hidden;
            }
        }
    }
</style>