<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import UserManager from '../composables/UserManager.js';
import ProductManager from '../composables/ProductManager.js';
import CartManager from '../composables/CartManager.js';

const userManager = new UserManager();
const productManager = new ProductManager();
const cartManager = new CartManager();

const router = useRouter();

const cartProductsId = computed(() => {
    return cartManager.getProductIdsByUserId(userManager.getCurrentUser())
});

function isProductBought(productId) {
    return cartProductsId.value.includes(productId); 
};
const products = computed(() => {
    return productManager.getProducts();
});

const isModalVisible = ref(false);
const closeModal = () => {
    isModalVisible.value = false;
};

const buySatetMachine = ref("");
const currentProductId = ref(null);

function BuyProductById(productId) {
    if (userManager.getCurrentUser() != null) {
        if(cartManager.addToCart(userManager.getCurrentUser(), productId)){
            buySatetMachine.value = "fine" 
        }else{
            buySatetMachine.value = "already paid" 
        }
    }else{
        buySatetMachine.value = "not registered" 
    }
    isModalVisible.value = true;
}
function openPayModal(productId){
    buySatetMachine.value = 'process' 
    currentProductId.value = productId;
    isModalVisible.value = true;
}
</script>

<template>
    <div v-if="isModalVisible" class="modal-overlay" @click="closeModal">
        <div class="modal" @click.stop>
            <div v-if="buySatetMachine == 'process'">
                <h1>Введите номер карты</h1>
                <button @click="BuyProductById(currentProductId)">Оплатить</button>
            </div>
            <div v-if="buySatetMachine == 'fine'">
                <h1>Приятной игры</h1>
                <button @click="router.push({ name: 'ProfilePage' })">Играть</button>
            </div>
            <div v-if="buySatetMachine == 'not registered'">
                <h1>Иди регайся </h1>
                <button @click="router.push({ name: 'ProfilePage' })">Вход / Регистрация</button>
            </div>
            <div v-if="buySatetMachine == 'already paid'">
                <h1>Вы уже купили эту игру</h1>
                <button @click="router.push({ name: 'ProfilePage' })">Играть</button>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container main">
            <div class="container main-fog"></div>
            <h1 class="title">ИГРЫ</h1>
        </div>
        
        <div class="container product-card" v-for="product in products" :style="{
            backgroundImage: `url(${product.backgroundImgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }">
            <div class="container container-fog"></div>
            <div class="product-card-information">
                <h1 class="product-card-title">{{ product.name }}</h1>
                <p class="product-card-text">{{ product.description }}</p>
                <div class="product-card-buy">
                    <h2>{{ product.price }}</h2>
                    <button v-if="!isProductBought(product.id)" @click="openPayModal(product.id)">Купить</button>
                    <button v-if="isProductBought(product.id)" @click="router.push({ name: 'ProfilePage' })">Играть</button>
                </div>
            </div>
            <img class="product-card-img" :src="product.imgUrl" alt="product image">
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

.product-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40vw;
}

.product-card-information {
    color: #ffffff;
    z-index: 1;
    padding-left: 4vw;
    width: 45vw;
}

.product-card-title {
    position: relative;
    top: 0vw;
    text-align: left;
    padding-left: 2vw;
    width: 47vw;
    font-size: 5vw;
}

.product-card-text {
    position: relative;
    text-align: left;
    top: -2vw;
    height: 15vw;
    width: 47vw;
    padding: 1vw;
    line-height: 1.5vw;
}

.product-card-buy {
    position: relative;
    bottom: 2vw;
    left: 3vw;
    display: flex;
    flex-direction: row;
    gap: 2vw;
}

.product-card-buy button {
    background-color: #4caf50;
    transition: background-color 0.3s;
}

.product-card-buy button:hover {
    color: #318a34;
    background-color: #ffffff;
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

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    padding: 2vw;
    line-height: 1.5vw;
    height: 20vw;
    width: 10wv;
    background-color: #b8b8b8a6;
    color: white;
    backdrop-filter: blur(1vw);
    border-radius: 1vw;
    box-shadow: 0 0.4vw 0.6vw rgba(0, 0, 0, 0.2);
}

.modal h1 {
    width: 30vw;
}

.modal button {
    height: 5vw;
    width: 25vw;
    background-color: #5cbd5f;
    transition: background-color 0.3s;
}

.modal button:hover {
    color: #5cbd5f;
    background-color: #ffffff;
}
</style>
