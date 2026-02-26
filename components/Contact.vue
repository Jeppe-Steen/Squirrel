<script setup>
</script>

<template>
    <section class="contact-component">
        <header class="contact-component__header">
            <h2>Lyder dette som noget for som dig?</h2>
            <h1>Så tøv ikke med at kontakte mig</h1>
        </header>
        <form action="https://formspree.io/f/mpwvnyej" method="POST" class="contact-component__form">
            <input placeholder="Fulde navn" type="text" name="Fullname" required>
            <input placeholder="Email" type="email" name="email" required>
            <input placeholder="Telefonnummer" type="tel" name="telephone" required>
            <textarea placeholder="Besked som fortæller om din problemstilling" name="message" cols="30" rows="10" required></textarea>
            <button type="submit">Send beskeden</button>
        </form>
        <iframe class="contact-component__map" title="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.6064533883787!2d9.696345913228498!3d57.160883503077045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464925c8a65bab49%3A0xb1b741175a25d19e!2sSandmosevej%2011%2C%209440%20Aabybro!5e0!3m2!1sda!2sdk!4v1768941476115!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>

<style lang="scss" scoped>
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.contact-component {
    width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-areas: 
        "header header"
        "form map";
    margin-top: 50px;
    gap: 40px;

    &__header {
        grid-area: header;
         h1 {
            font-size: 2.5rem;
            width: 100%;
            text-align: center;
        }

        h2 {
            font-size: 1.5rem;
            width: 100%;
            text-align: center;
        }
    }

    &__form {
        grid-area: form;
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

    &__map {
        width: 100%;
    }
}
</style>
