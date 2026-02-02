<script setup>
import ancor from './reuseable/ancor.vue'
</script>

<template>
    <section class="contact">
        <ancor path="kontakt"/>
        <h2>Lyder dette som noget for som dig?</h2>
        <h3>Så kontakt mig her - eller på TLF: 22 31 39 69</h3>
        <form action="https://formspree.io/f/mpwvnyej" method="POST">
            <input placeholder="Fulde navn" type="text" name="Fullname" required>
            <input placeholder="Email" type="email" name="email" required>
            <input placeholder="Telefonnummer" type="tel" name="telephone" required>
            <textarea placeholder="Besked som fortæller om din problemstilling" name="message" cols="30" rows="10" required></textarea>
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

    h2 {
        text-align: center;
    }
    h3 {
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