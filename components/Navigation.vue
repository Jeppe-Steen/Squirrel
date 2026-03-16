<script setup>
import { ref } from 'vue';

const active = ref(true)
const menuOpen = ref(false)


// onMounted(() => {
//   window.addEventListener("scroll", () => {
//     if(window.scrollY >= 100) {
//       active.value = true;
//       return;
//     }

//     active.value = false;
//     return;

//   })
// })

const toggleMenu = (value) => {
  menuOpen.value = value;
  return;
}

</script>

<template>
<div class="navigation-component" :class="{'scrolled': active & !menuOpen, 'navigation-component__open': menuOpen}" >
 <nav class="navigation" :class="{'navigation__open': menuOpen}">
    <ul>
      <li>
        <NuxtLink to="/" @click="toggleMenu(false)">Forside</NuxtLink>
      </li>
      
      <li>
        <NuxtLink to="/behandlinger" @click="toggleMenu(false)">Behandlinger</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/priser" @click="toggleMenu(false)">Priser</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/kontakt" @click="toggleMenu(false)">Kontakt</NuxtLink>
      </li>

      <li>
        <NuxtLink to="/om" @click="toggleMenu(false)">Om Klinikken</NuxtLink>
      </li> 
      <li>
        <NuxtLink to="/anmeldelser" @click="toggleMenu(false)">Anmeldelser</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#faq" @click="toggleMenu(false)">FAQ</NuxtLink>
      </li>  
    </ul>
  </nav>

  <div class="hidden_menu">
    <p v-if="!menuOpen" class="hidden_menu--menu" @click="toggleMenu(true)">Menu</p>
    <p v-if="menuOpen" class="hidden_menu--cross" @click="toggleMenu(false)">Luk</p>
  </div>

  <div class="mobile_contact">
    <a href="tel:22312969">Ring op</a>
  </div>

</div>
</template>

<style lang="scss" scoped>

$lightestGreen:#F1F3E0;
$lightGreen:#D2DCB6;
$green:#A1BC98;
$darkGreen:#778873;

.navigation-component {
  position:fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 990;

  
  padding: 0 100px;
  display: flex;

  &__open {
    padding: unset;
  }

  .navigation {
    display: none;

    &__open {
      display: flex;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: center; 
      text-align: center; 
      background-color: $lightGreen;
    }

    // large screens
    @media (min-width: 1200px) {  display: flex; align-items: center; };
  }

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
    flex-direction: column; 
    list-style: none;
    font-weight: bold;
    
    //large screens
    @media (min-width: 1200px) {
      display: flex;
      align-items: center;
      flex-direction: row; 
      list-style: none;
      font-weight: bold;
    }

    li {
      font-size: 1.5rem;
      margin-bottom: 20px;

      //large screens
      @media (min-width: 1200px) {
        font-size: 1rem;
        margin-bottom: unset;
      }

      &:hover {
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: 0px;

        //large screens
        @media (min-width: 1200px) {
          margin-right: 50px;
        }
      }

      a {
        color: black;
        text-decoration: none;

      }
    }
  }

  .hidden_menu {
    position: absolute;
    left: 50px;
    font-weight: bold;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    color: white;

    &--menu, &--cross {
      font-size: 1rem;

      // large screens
      @media (min-width: 1200px) {
        display: none;
      }
    }

    &--cross {
      color: black !important;
    }
  }

  .mobile_contact {
    position: absolute;
    right: 30px;
    top: 50%;
    padding: 10px 30px;
    border-radius: 10px;
    transform: translateY(-50%);

    background-color: $lightGreen;
    box-shadow: 0 0 10px 5px #00000030;

    // large screens
    @media (min-width: 1200px) {
      display: none;
    }

    a {
      color: black;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>