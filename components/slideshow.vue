<template>
    <section class="slideshow">
        <article class="picture active"></article>
        <article class="picture inactive1"></article>
        <article class="picture inactive2"></article>
        <article class="picture inactive3"></article>
    </section>
</template>

<style lang="scss">
    .slideshow{
        width: 100%;
        height: 500px;
        background-color: lightcoral;
        margin-top: 50px;
        display: grid;
        grid-template-columns: 40% 20% 20% 20%;

        .active {
            background-color: lightgreen;
        }
        
        .inactive1 { background-color: aqua;}
        .inactive2 { background-color: aquamarine;}
        .inactive3 { background-color: blue;}
    }
</style>