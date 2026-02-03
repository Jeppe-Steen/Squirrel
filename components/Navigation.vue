<script setup>
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
 <nav :class="{'scrolled': active}">
    <ul>
      <li>
        <NuxtLink to="/">Forside</NuxtLink>
      </li>
      
      <li>
        <NuxtLink to="/behandlinger">Behandlinger</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/priser">Priser</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/kontakt">Kontakt</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/betingelser">Betingelser</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/om">Om Klinikken</NuxtLink>
      </li> 

      <li>
        <NuxtLink to="/#faq">FAQ</NuxtLink>
      </li>  
    </ul>
  </nav>
</template>

<style lang="scss">

$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

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
</style>