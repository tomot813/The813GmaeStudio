<script setup>
import { ref, computed } from 'vue';

import ProductManager from '../composables/ProductManager.js';
import CartManager from '../composables/CartManager.js';


const productManager = new ProductManager();
const cartManager = new CartManager();

const products = computed(() => {
    return productManager.getProducts();
});

</script>

<template>
        <div class="content">
        <div class="container main">
            <div class="container main-fog"></div>

            <h1 class="title">ИГРЫ</h1>
        </div>
        
        <div class="container product-card" v-for="product in products"   :style="{
            backgroundImage: `url(${product.productBackgroundImgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }">
            <div class="container container-fog"></div>

            <div class="product-card-information">
                <h1 class="product-card-title">{{ product.productName }}</h1>
                
                <p class="product-card-text">{{ product.productDescription }}</p>
                <div class="product-card-buy">
                    <h2>{{ product.productPrice }}</h2>
                    <button>Купить</button>
                </div>
                
            </div>
            <img class="product-card-img" :src="product.productImgUrl" alt="product image">

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
    width: 85vw;
    height: 40vw;
    background-color: #ffffff;
    border-radius: 1vw;
    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.container-fog{
    position: absolute;
    
    width: 85vw;
    height: 40vw;
    
    
    background-color: #797979a6;

    backdrop-filter: blur(0.6vw);
}

.main {
    margin-top: -5vw;
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

.main-fog{
    position: absolute;

    
    height: 14vw;

    background-color: #0c0c0c45;
    box-shadow: 0 0vw 0vw rgba(0, 0, 0, 0);

}

.title{
    width: 40vw;
    color: #f0f0f0;

    font-size: 5vw;
    margin-top: 4vw;
    margin-bottom: 0vw;
    z-index: 1;

}


.product-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40vw;
}


.product-card-information{
    color: #ffffff;
    z-index: 1;
    padding-left: 4vw;
    width: 45vw;
}

.product-card-title{
    position:relative;
    top: 0vw;

    text-align: left;
    padding-left: 2vw;
    width: 47vw;
    font-size: 5vw;
}

.product-card-text{
    position: relative;

    text-align: left;

    top: -2vw;
    height: 15vw;
    width: 47vw;
    padding: 1vw;
    line-height: 1.5vw;


}

.product-card-buy{
    position: relative;
    bottom: 2vw;
    left: 3vw;

    display: flex;
    flex-direction: row;
    gap: 2vw;
}

.product-card-img {
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
</style>