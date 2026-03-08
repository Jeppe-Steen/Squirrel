<template>
    <footer class="footer-component">
        <section class="footer-component__section">
      <article>
        <h3>Links</h3>
        <ul>
          <li><NuxtLink to="/">Forside</NuxtLink></li>
          <li><NuxtLink to="/behandlinger">Behandlinger jeg tilbyder</NuxtLink></li>
          <li><NuxtLink to="/priser">Priser</NuxtLink></li>
          <li><NuxtLink to="/kontakt">Kontakt</NuxtLink></li>
          <li><NuxtLink to="/om">Om klinikken</NuxtLink></li>
          <li><NuxtLink to="/anmeldelser">Anmeldelser</NuxtLink></li>
          <li><NuxtLink to="/#faq">Ofte stillede spørgsmål</NuxtLink></li>
        </ul>
      </article>
      <address>
        <h3>Oplysninger</h3>
        <p>Sandmosevej 11, 9440 Aabybro</p>
        <p>Tlf: 22 31 39 69</p>
        <p>Mail: info@klinikegernboakupunktur.dk</p>
        <p>CVR: 46094417</p>
        <br />
        <p>Mandag: 8:00 - 15:00</p>
        <p>Tirsdag: 8:00 - 18:30</p>
        <p>Onsdag - Torsdag: 8:00 - 15:00</p>
        <p>Fredag: 8:00 - 12:30</p>
        <p>Lørdag - Søndag: Lukket</p>
      </address>
      <article>
        <iframe title="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.6064533883787!2d9.696345913228498!3d57.160883503077045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464925c8a65bab49%3A0xb1b741175a25d19e!2sSandmosevej%2011%2C%209440%20Aabybro!5e0!3m2!1sda!2sdk!4v1768941476115!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </article>
    </section>
  </footer>
</template>

<style lang="scss" scoped>

$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.footer-component {
  height: fit-content;
  padding: 50px;
  background-color: $lightGreen;
  margin-top: 50px;
  width: 100%;

  // large screens
  @media (min-width: 1200px) {
    padding: 50px;
  };

  &__section {
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