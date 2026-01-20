<script setup>
import hero from '../components/hero.vue';
import welcome from '../components/welcome.vue';
import treatments from '../components/treatments.vue';
import description from '../components/description.vue';
import personaldata from '../components/personaldata.vue';
import agreements from '../components/agreements.vue';
import gallery from '../components/gallery.vue';
import prices from '../components/prices.vue';
import about from '../components/about.vue';
import contact from '../components/contact.vue';
import FAQ from '../components/FAQ.vue';
import conditions from '../components/conditions.vue';

import { ref } from 'vue';

const active = ref(false)


onMounted(() => {
  window.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
      active.value = true;
      return;
    }

    active.value = false;
    return;

  })
})
</script>


<template>
  <Head>
      <Title>Klassisk Kinesisk Akupunktur | Klinik Egernbo Akupunktur | Aabybro</Title>
      <Meta
        name="description"
        content="Velkommen til klinik Egernbo. Har du gået med tanken om at prøve akupunktur, enten af ren nygerighed, eller i håbet om en alternativ vej til at få det bedre fysisk eller mentalt? Så læs endeligt videre, du er kommet til det rette sted. Som en af de få i Nordjylland der er uddannet indenfor CCM, den originale tilgang til akupunktur, tilbyder jeg en holistisk tilgang til mine klienter, hvor man ikke bare symptombehandler, men tager udgangspunkt i det hele menneske, for at kunne behandle roden til de sygdomme der er opstået. En metode der fandtes før den vestlige tilgang til behandlinger opstod. Vi er beliggede lidt uden for Aabybro så kontakt os endelig!"
      />
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <Meta
        name="robots"
        content="index, follow"
      />
    </Head>

  <nav :class="{'scrolled': active}">
    <ul>
      <li><a href="#behandlinger">Behandlinger</a></li>
      <li><a href="#priser">Priser</a></li>
      <!-- <li><a href="#">Anmeldelser</a></li> -->
      <li><a href="#kontakt">Kontakt</a></li>
      <li><a href="#faq">FAQ</a></li>
    </ul>
  </nav>

  <header class="header">
        <hero/>
  </header>

  <main class="main">
    <section class="fixed-background">
      <div class="first"></div>
      <div class="secound"></div>
    </section>

    <section class="main__container">
      <welcome/>
      <treatments/>
      <description/>
      <gallery/>
      <prices/>
      <about/>
      <contact/>
      <FAQ />
      <personaldata />
      <agreements />
      <conditions />
    </section>
  </main>

  <footer class="footer">
    <section class="footer_section">
      <article>
        <h3>Links</h3>
        <ul>
          <li><a href="#behandlinger">Behandlinger jeg tilbyder</a></li>
          <li><a href="#akupunktur">Hvad er akupunktur</a></li>
          <li><a href="#priser">Priser</a></li>
          <li><a href="#om">Om mig</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
          <li><a href="#faq">Ofte stillede spørgsmål</a></li>
          <li><a href="#persondatapolitik">Persondatapolitik</a></li>
          <li><a href="#samtykke">Samtykkeerklæring</a></li>
          <li><a href="#handelsbetingelser">Handelsbetingelser</a></li>
        </ul>
      </article>
      <article>
        <h3>Oplysninger</h3>
        <p>Sandmosevej 11, 9440 Aabybro</p>
        <p>Tlf: 22 31 39 69</p>
        <p>Mail: info@klinikegernboakupunktur.dk</p>
        <p>CVR: 46094417</p>
        <br />
        <p>Mandag-fredag: 9:00 - 15:00</p>
        <p>Lørdag-Søndag: Lukket</p>
      </article>
      <article>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.6064533883787!2d9.696345913228498!3d57.160883503077045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464925c8a65bab49%3A0xb1b741175a25d19e!2sSandmosevej%2011%2C%209440%20Aabybro!5e0!3m2!1sda!2sdk!4v1768941476115!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </article>
    </section>
  </footer>
</template>

<style lang="scss">
$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open sans', sans-serif;
  scroll-behavior: smooth;
}

nav {
  display: none;
  position:fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 999;

  align-items: center;
  padding: 0 100px;

  // large screens
  @media (min-width: 1200px) {  display: flex; };

  &.scrolled {
    background-color: $darkGreen;
    box-shadow: 0 0 10px 5px #00000030;
    a {
      color:white;
    }
  }
  
  &:hover {
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    font-weight: bold;

    li {
      &:hover {
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: 50px;
      }

      a {
        color: black;
        text-decoration: none;
      }
    }
  }
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1rem;
}

h4 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
}

.header {
  width: 100%;
  height: fit-content;
}

.main {
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;

  &__container {
    width: 100%;
    min-height: 1000px;
    height: fit-content;
    background-color: transparent;
    z-index: 90;
    padding: 0 20px;
    
    // large screens
    @media (min-width: 1200px) {  width: 60%; padding: unset; };
  }

  .fixed-background {
    height:max-content;

    .first{
      width: 100%;
      position: absolute;
      height: 120vh;
      background-color: $lightestGreen;
      top: 50vh;
      left: 0;
      z-index: 0;

      // large screens
      @media (min-width: 1200px) {
        height: 45vh;
        top: 60vh;
      };
    }

    .secound{
      width: 100%;
      position: absolute;
      height: 120vh;
      background-color: $lightestGreen;
      top: 4950px;
      left: 0;
      z-index: 0;

      // large screens
      @media (min-width: 1200px) {
        height: 80vh;
        top: 2500px;
      };
    }
  }
}

footer {
  height: fit-content;
  padding: 20px;
  background-color: $lightGreen;
  margin-top: 50px;
  width: 100%;

  // large screens
  @media (min-width: 1200px) {
    padding: 50px;
  };

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

     // large screens
    @media (min-width: 1200px) {
          flex-direction: row;
    };

     article {
      margin-bottom: 50px;

      @media (min-width: 1200px) {
        margin: unset;
        width: 30%;
      }
    }

  }

  li {
    list-style: circle;
    &:hover {
      list-style: unset;
    }
    a {
      color: black;
      text-decoration: none;
    }
  }

  iframe {
    height: unset;
    width: 100%;

    @media (min-width: 1200px) {
      height: 300px;
    }
  }
}
</style>
