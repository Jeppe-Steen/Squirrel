<template>
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
      <address>
        <h3>Oplysninger</h3>
        <p>Sandmosevej 11, 9440 Aabybro</p>
        <p>Tlf: 22 31 39 69</p>
        <p>Mail: info@klinikegernboakupunktur.dk</p>
        <p>CVR: 46094417</p>
        <br />
        <p>Mandag-fredag: 9:00 - 15:00</p>
        <p>Lørdag-Søndag: Lukket</p>
      </address>
      <article>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2163.6064533883787!2d9.696345913228498!3d57.160883503077045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464925c8a65bab49%3A0xb1b741175a25d19e!2sSandmosevej%2011%2C%209440%20Aabybro!5e0!3m2!1sda!2sdk!4v1768941476115!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </article>
    </section>
  </footer>
</template>

<style lang="scss">

$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

footer {
  height: fit-content;
  padding: 50px;
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