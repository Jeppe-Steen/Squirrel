<script setup>
import ancor from './reuseable/ancor.vue';
</script>

<template>
    <section class="faq">
        <ancor path="FAQ" />
        <h2>Ofte Stillede spørgsmål</h2>
        <div class="container">
            <article class="question">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis maiores perferendis, ipsam suscipit, veniam optio, voluptatem ipsa magnam quis velit asperiores nostrum iure similique quaerat explicabo doloribus facere aut.</p>
            </article>

            <article class="question">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis maiores perferendis, ipsam suscipit, veniam optio, voluptatem ipsa magnam quis velit asperiores nostrum iure similique quaerat explicabo doloribus facere aut.</p>
            </article>

            <article class="question">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis maiores perferendis, ipsam suscipit, veniam optio, voluptatem ipsa magnam quis velit asperiores nostrum iure similique quaerat explicabo doloribus facere aut.</p>
            </article>

            <article class="question">
                <h3>Lorem ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis maiores perferendis, ipsam suscipit, veniam optio, voluptatem ipsa magnam quis velit asperiores nostrum iure similique quaerat explicabo doloribus facere aut.</p>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
.faq {
    margin-top: 50px;
    
    h2 {
        text-align: center;
        padding: 20px 0;
        background-color: white;
        box-shadow: 0 0 10px 5px #00000030;
    }

    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 20px;

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }
        
        .question {
            background-color: white;
            box-shadow: 0 0 10px 5px #00000030;
            padding: 20px;
        }
    }
}
</style>