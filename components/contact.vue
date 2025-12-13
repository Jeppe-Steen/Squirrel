<script setup>
import ancor from './reuseable/ancor.vue'
</script>

<template>
    <section class="contact">
        <ancor path="kontakt"/>
        <h2>Skriv til mig her!</h2>  
        <form name="contact" data-netlify="true" onsubmit="return false">
            <input placeholder="Fulde navn" type="text" name="Full name">
            <input placeholder="Email" type="email" name="email">
            <textarea placeholder="Besked som fortæller om din problemstilling" name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send beskeden</button>
        </form>
    </section>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.contact {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    padding: 0 20px;

    @media (min-width: 1200px) {
        padding: 0;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        display:flex;
        flex-direction: column;

        input, textarea {
            padding: 10px 20px;
            margin-bottom: 20px;
            resize: none;
            border: 1px solid black;
        }

        button {
            padding: 20px 20px;
            background-color: $darkGreen;
            color: white;
            border: none;
            text-transform: uppercase;
            font-weight: bold;

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>