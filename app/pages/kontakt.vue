<script lang="ts" setup>
</script>

<template>
    <UiHeader description="Lyder dette som noget for som dig?">
        <template #header>
            <h1>Kontakt mig idag!</h1>
        </template>
    </UiHeader>

    <UiButton label="Book tid online her!" size="large" styling="cta" />

    <div class="divider">
        <div></div>
        <p>Eller</p>
        <div></div>
    </div>

    <article class="content">
        <form action="https://formspree.io/f/mpwvnyej" method="POST" class="content--form">
            <input placeholder="Fulde navn" type="text" name="Fullname" required>
            <input placeholder="Email" type="email" name="email" required>
            <input placeholder="Telefonnummer" type="tel" name="telephone" required>
            <textarea placeholder="Besked som fortæller om din problemstilling" name="message" cols="30" rows="10" required></textarea>
            <button type="submit">Send besked</button>
        </form>

        <iframe class="content--map" title="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.6064533883787!2d9.696345913228498!3d57.160883503077045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464925c8a65bab49%3A0xb1b741175a25d19e!2sSandmosevej%2011%2C%209440%20Aabybro!5e0!3m2!1sda!2sdk!4v1768941476115!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </article>
</template>

<style lang="scss" scoped>
    .divider {
        text-align: center;

        display: grid;
        grid-template-columns: 1fr 0.5fr 1fr;

        div {
            width: 100%;
            height: 1px;
            background-color: black;
            align-self: center;
        }
    }

    .content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;

        @media (min-width: 1200px) {
          grid-template-columns: 1fr 1fr;  
        }

        &--form {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            input, textarea {
                padding: 10px 20px;
                resize: none;
                border: 1px solid black;
            }

            button {
                padding: 20px 20px;
                background-color: black;
                color: white;
                border: none;
                text-transform: uppercase;
                font-weight: bold;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        &--map {
            width: 100%;
        }
    }
</style>