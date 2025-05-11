<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="footer-style">
    <footer >
      <div class="menu">
        <RouterLink class="menu-btn blue-line" :to="{ name: 'MainPage' }">Главная</RouterLink>
        <RouterLink class="menu-btn blue-line" :to="{ name: 'GameStorePage' }">Игры</RouterLink>
        <RouterLink class="menu-btn blue-line" :to="{ name: 'NewsPage' }">Новости</RouterLink>
        <RouterLink class="menu-btn blue-line" :to="{ name: 'AboutPage' }">О Нас</RouterLink>
        <RouterLink class="menu-btn blue-line" :to="{ name: 'ProfilePage' }">Профиль</RouterLink>
      </div>
      <div class="social">
          <div class="icon-wrapper">
              <img src="../assets/youtube.png" alt="YouTube">
              <span class="tooltip">YouTube</span>
          </div>
          <div class="icon-wrapper">
              <img src="../assets/instagram.png" alt="Instagram">
              <span class="tooltip">Instagram</span>
          </div>
          <div class="icon-wrapper">
              <img src="../assets/email.png" alt="Email">
              <span class="tooltip">Email</span>
          </div>
          <div class="icon-wrapper">
              <img src="../assets/pinterest.png" alt="Pinterest">
              <span class="tooltip">Pinterest</span>
          </div>
      </div>

      <div class="right">
        <p>© 2025 The 813 Game Studio</p>
      </div>


    </footer>
  </div>

</template>

<style scoped>
.footer-style {
  padding-top: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
}


footer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  width: 85vw;
  height: 20vw;

  padding: 2vw;
  gap: 2vw;


  background-color: #0c0c0cb9;
  backdrop-filter: blur(0.6vw);
  border-radius: 1vw;
  box-shadow: 0 0.7vw 0.6vw rgba(0, 0, 0, 0.377);
}


.menu{
  position: absolute;
  top: 4vw;
  left: 6vw;

  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5vw;

}
.menu-btn {
  color: rgb(255, 255, 255);
  transition: box-shadow 0.5s;
  font-size: 2.2vw;
}
.menu-btn:hover{
  color: #5cbd5f;

}

.social{
  position: absolute;
  top: 4vw;
  right: 6vw;

  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 1.5vw;
}


.icon-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-wrapper img {
    height: 5vw;
    transition: filter 0.3s;
}

.icon-wrapper img:hover {
    filter: brightness(0) saturate(100%) invert(48%) sepia(53%) saturate(379%) hue-rotate(76deg) brightness(100%) contrast(93%);
    cursor: pointer;
}

.tooltip {
    visibility: hidden;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 0.3vw;
    padding: 0.4vw 0.8vw;
    position: absolute;
    bottom: -2.8vw;
    white-space: nowrap;
    font-size: 1.2vw;
    opacity: 0;
    transition: opacity 0.3s;
}

.icon-wrapper:hover .tooltip {
    visibility: visible;
    opacity: 1;
}


.right{
  
  position: absolute;
  bottom: 2vw;
  right: 6vw;

  color: white;

  font-size: 0.9vw;
}
</style>
