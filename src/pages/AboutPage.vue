<script setup>
import { ref, computed } from 'vue';

</script>

<template>


    <div class="content">
        <div class="container main">
            <div class="container main-fog"></div>
            <h1 class="title">О Нас</h1>
        </div>
        <div class="container ">

        </div>
        

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
    overflow: hidden; 
    position: relative;
    width: 85vw;
    height: 40vw;
    background-color: #f0f0f0;
    border-radius: 1vw;
    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
}

.container-fog {
    position: absolute;
    width: 85vw;
    height: 45vw;
    background-color: #797979a6;
    backdrop-filter: blur(0.6vw);
}

.main {
    margin-top: -5vw;
    padding: 2vw;
    padding-top: 0;
    height: 14vw;
    border-radius: 0 0 1vw 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    background-image: url("../assets/NatureBackground.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    image-rendering: pixelated;
}

.main-fog {
    position: absolute;
    padding: 2vw;
    height: 14vw;
    background-color: #0c0c0c45;
    box-shadow: 0 0vw 0vw rgba(0, 0, 0, 0);
}

.title {
    width: 40vw;
    color: #f0f0f0;
    font-size: 5vw;
    margin-top: 4vw;
    margin-bottom: 0vw;
    z-index: 1;
}


</style>