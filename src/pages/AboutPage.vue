<script setup>
import { ref, computed } from 'vue';

</script>

<template>


    <div class="content">
        <div class="container main">
            <div class="container main-fog"></div>
            <h1 class="title">О Нас</h1>
        </div>
        <div class="container container-text">
            <div class="about-text">
                <h1 >Про Студию</h1>
                <p >Мы — студия 813, и мы делаем игры, которые невозможно забыть. Нас вдохновляет абсурд, повседневность, тревожные сны и северная мятная жвачка. Мы любим экспериментировать с жанрами и смешивать несмешиваемое: философию и троллей, скейтбординг и газеты, уют и безумие. В наших играх можно выращивать цветы в теплице или драться с говорящими холодильниками. Главное — чтобы было по-настоящему, странно и интересно. 813 — это немного хаоса, немного красоты и всегда что-то не так.</p>

            </div>
            <img class="abiut-img" src="../assets/perkele2.png" alt="">

        </div>
        <div class="container container-workers">
            <h1 >МЫ🥹</h1>
            <div class="workers-grid">
                <div class="worker">
                    <img src="../assets/gosling.jpg" alt="">
                    <h2>Ренат Гослянов</h2>
                    <h3>Art Director</h3>
                </div>
                <div class="worker">
                    <img src="../assets/hamilton.png" alt="">
                    <h2>Александр Гамильтон</h2>
                    <h3>Team Leader</h3>
                </div>
                <div class="worker">
                    <img src="../assets/goodman.png" alt="">
                    <h2>Саня Хорошенькович</h2>
                    <h3>Game Designer</h3>
                </div>
            </div>

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



.container-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.about-text {
    padding: 5vw;
    text-align: left;

    height: 20vw;
    line-height: 1.4vw;
    font-size: 1.2vw;
    flex: 1; 
}
.about-text h1{
    margin-top: -6vw;

}

.abiut-img  {
    width: 30vw;
    height: 40vw;
    object-fit: cover;
    border-radius: 1vw;
    flex-shrink: 0;
    z-index: 1;

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



.container-workers {
    padding-bottom: 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    height: auto;
}

.workers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
    gap: 2vw;
    width: 100%;
    justify-items: center;
}

.worker {
    text-align: center;
    padding: 1vw;
}

.worker img {
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0.3vw 0.6vw rgba(0, 0, 0, 0.2);
    margin-bottom: 1vw;
}

.worker h2 {
    font-size: 1.4vw;
    margin: 0.5vw 0 0.3vw 0;
}

.worker h3 {
    font-size: 1.1vw;
    color: #555;
    margin: 0;
}
</style>