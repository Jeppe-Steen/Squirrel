<template>
    <footer class="footer-component">
      
      <div class="footer-logo">
        <img src="../assets/svg/egernbo_logo_svg.svg" alt="Logo" />
      </div>

      <div class="footer-contact">
        <h2>Kontakt</h2>
        <adress>
          <p>Sandmosevej 11, 9440 Aabybro</p>
          <p>Tlf: 22 31 39 69</p>
          <p>Mail: info@klinikegernboakupunktur.dk</p>
          <p>CVR: 46094417</p>
        </adress>
      </div>

      <div class="footer-general">
        <h2>Links</h2>
        <NuxtLink to="/">Forside</NuxtLink>
        <NuxtLink to="/behandlinger">Behandlinger</NuxtLink>
        <NuxtLink to="/priser">Priser</NuxtLink>
        <NuxtLink to="/kontakt">Kontakt</NuxtLink>
        <NuxtLink to="/om">Om klinikken</NuxtLink>
        <NuxtLink to="/anmeldelser">Anmeldelser</NuxtLink>
        <NuxtLink to="/#faq">Ofte stillede spørgsmål</NuxtLink>
      </div>

      <div class="footer-rab">
        <img src="../assets/image/RAB.png" alt="RAB" />
      </div>

      <div class="footer-by">
        <p>Klinik Egernbo Akupunktur | CVR: 46094417</p>
      </div>
  </footer>
</template>

<style lang="scss" scoped>

$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.footer-component {
  height: fit-content;
  padding: 50px 10px;
  background-color: $lightGreen;
  margin-top: 50px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto auto;
  grid-template-areas: 
    "logo" "contact" "general" "rab" "by";

  gap: 20px;
  
  @media (min-width: 1200px) {
    height: 550px;
    padding: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 10px;
    grid-template-areas: 
      "logo contact general"
      "rab rab rab"
      "by by by";
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column; 
    text-align: center;

    h2 {
      margin-bottom: 10px;
    }
  }

  .footer-logo {
    grid-area: logo;
    justify-content: center !important;

    img {
      width: 40%;
    }
  }

  .footer-contact {
    width: 100%;
    grid-area: contact;
  }

  .footer-general {
    width: 100%;
    grid-area: general;

    a {
      color: black;
      text-decoration: none;
      margin-bottom: 10px;
    }

  }

  .footer-rab {
    grid-area: rab;

    img {
      width: 100%;

      @media (min-width: 1200px) {
      width: 30%;
      }
    }
  }

  .footer-by {
    grid-area: by;
    text-align: center;
  }
}
</style>