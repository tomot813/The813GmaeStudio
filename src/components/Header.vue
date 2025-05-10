<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>

  <RouterLink class="header-style logo blue-line" :to="{ name: 'MainPage' }">
    <!-- <img class="logo-img" src="../assets/logo_813.png" alt=""> -->
    813
  </RouterLink>


  <header class="header-style">
    <RouterLink class="menu-btn blue-line" :to="{ name: 'pageOne' }">Игры</RouterLink>
    <RouterLink class="menu-btn red-line" :to="{ name: 'pageTwo' }">Фывфыв</RouterLink>
    <RouterLink class="menu-btn yellow-line" :to="{ name: 'pageThree' }">О Нас</RouterLink>

  </header>

  <RouterLink class="header-style profile red-line" :to="{ name: 'ProfilePage' }">
    <img class="profile-img" src="../assets/login_profile.png" alt="">
  </RouterLink>


</template>

<style scoped>


.logo {
  color: white;
  font-size: 1.1vw;
  width: 3.5vw;
  left: 15.5vw;
  transition: 0.3s;
}


.logo-img {
  height: 4vw;
  width: 4vw;
}


.profile {
  width: 3.5vw;
  right: 15.5vw;
  transition: 0.5s;

}

.profile-img {
  height: 2.5vw;
  width: 2.5vw;
}

.header-style {
  position: fixed;
  bottom: 0.5vw;


  height: 3.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;



    background-color: #0c0c0c96;
  /* background-color: rgba(22, 22, 22, 0.815); */
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
  transition: 0.5s;
  width: 10vw;
}



.blue-line:hover {
  box-shadow: 0 -1.3vw 0 rgb(91, 162, 196);
}

.red-line:hover {
  box-shadow: 0 -1.3vw 0 rgb(196, 91, 91);
}

.yellow-line:hover {
  box-shadow: 0 -1.3vw 0 rgb(238, 212, 98);
}
</style>