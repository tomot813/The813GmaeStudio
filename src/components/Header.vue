<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>

  <RouterLink class="header-style logo blue-line" :to="{ name: 'MainPage' }">
    813
  </RouterLink>


  <header class="header-style">
    <RouterLink class="menu-btn blue-line" :to="{ name: 'GameStorePage' }">Игры</RouterLink>
    <RouterLink class="menu-btn blue-line" :to="{ name: 'NewsPage' }">Новости</RouterLink>
    <RouterLink class="menu-btn blue-line" :to="{ name: 'AboutPage' }">О Нас</RouterLink>

  </header>

  <RouterLink class="header-style profile blue-line" :to="{ name: 'ProfilePage' }">
    <img class="profile-img" src="../assets/login_profile.png" alt="">
  </RouterLink>


</template>

<style scoped>


.logo {
  color: white;
  font-size: 1.1vw;
  width: 3.5vw;
  left: 15.5vw;
  transition: box-shadow 0.3s;
}


.logo-img {
  height: 4vw;
  width: 4vw;
}


.profile {
  width: 3.5vw;
  right: 15.5vw;
  transition: box-shadow 0.5s;

}

.profile-img {
  height: 2.5vw;
  width: 2.5vw;

  image-rendering: pixelated;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges; 
    image-rendering: -o-crisp-edges;   
    image-rendering: -webkit-optimize-contrast; 
    image-rendering: optimize-contrast;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: optimizeSpeed; 
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}

.header-style {
  position: fixed;
  top: 0.5vw;


  height: 3.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;


    background-color: #0c0c0c96;
  backdrop-filter: blur(0.6vw);
  border-radius: 1vw;
  box-shadow: 0 0.3vw 0.6vw rgba(0, 0, 0, 0.2);
  /* -webkit-backdrop-filter: blur(10px); */

}


header {
  left: 50%;
  transform: translateX(-50%);

  width: 60vw;

  gap: 3vw;

}


.menu-btn {
  color: rgb(255, 255, 255);
  transition: box-shadow 0.5s;
  width: 10vw;
}



.blue-line:hover {
  color: #5cbd5f;

  box-shadow: 0 1.3vw 0 #5cbd5f;
  

}

img:hover {
    filter: brightness(0) saturate(100%) invert(48%) sepia(53%) saturate(379%) hue-rotate(76deg) brightness(110%) contrast(93%);
    cursor: pointer;
}


</style>