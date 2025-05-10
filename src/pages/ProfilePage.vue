<script setup>
import UserManager from '../composables/UserManager.js';

const userManager = new UserManager();
</script>

<template>
        <div class="content">
        <div class="container main">
            <div class="container main-fog"></div>

            <h1 class="title">Профиль</h1>
        </div>
        <div class="container">information 2</div>
        <div class="container">information 1</div>
    </div>
</template>



<style scoped>

.content {
    padding-top: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    min-height: 100vh; 
    justify-content: flex-start; 
}

.container {
    width: 85vw;
    height: 40vw;
    padding: 2vw;
    background-color: #f0f0f0;
    border-radius: 1vw;
    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
}

.main {
    margin-top: -5vw;
    padding-top: 0;
    
    height: 10vw;
    border-radius: 0 0 1vw 1vw;
    
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    
    background-image: url("../assets/NatureBackground.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    image-rendering: pixelated;
}

.main-fog{
    position: absolute;

    
    height: 10vw;

    background-color: #0c0c0c45;
    box-shadow: 0 0vw 0vw rgba(0, 0, 0, 0);

}

.title{
    width: 40vw;
    color: #f0f0f0;

    font-size: 5vw;
    margin-top: 6vw;
    margin-bottom: 0vw;
    z-index: 1;

}
</style>