<script setup>
import { ref, computed,reactive } from 'vue';
import NewsManager from '../composables/NewsManager.js';


const newsManager = new NewsManager();

const newss = computed(() => {
    return newsManager.getNewss();
});

</script>

<template>
    <div class="content" >
        <div class="container main">
            <div class="container main-fog"></div>

            <h1 class="title">Новости</h1>
        </div>


        <div class="container news-card" v-for="news in newss" :style="{
            backgroundImage: `url(${news.backgroundImgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }">
            <div class="container container-fog"></div>
            <div class="news-card-information">
                <h1 class="news-card-title">{{ news.name }}</h1>
                <p class="news-card-text">
                    {{ news.description }}

                </p>
                <div class="news-card-buy">
                    <h2>{{ news.date }}</h2>
                </div>
            </div>
            <img class="news-card-img" :src="news.imgUrl" alt="news image">
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
    width: 90vw;
    height: 100%;
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
    background-position: center;

    image-rendering: pixelated;
}

.main-fog{
    position: absolute;
    padding: 2vw;

    
    height: 14vw;

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


.news-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.news-card-information {
    color: #ffffff;
    z-index: 1;
    padding-left: 4vw;
}

.news-card-title {
    position: relative;
    top: 0vw;
    text-align: left;
    padding-left: 2vw;
    font-size: 4vw;
}

.news-card-text {
    position: relative;
    text-align: left;
    top: -2vw;
    height: 100%;
    width: 55vw;
    padding: 1vw;
    line-height: 1.5vw;
    margin-right: -6vw;

}

.news-card-buy {
    position: relative;
    bottom: 2vw;
    left: 3vw;
    display: flex;
    flex-direction: row;
    gap: 2vw;
}

.news-card-buy button {
    background-color: #4caf50;
    transition: background-color 0.3s;
}

.news-card-buy button:hover {
    color: #318a34;
    background-color: #ffffff;
}

.news-card-img {
    width: 40%;
    height: 100%;
    object-fit: contain;
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

</style>