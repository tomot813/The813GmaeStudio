<script setup>
import { ref, computed } from 'vue';

import UserManager from '../composables/UserManager.js';
import ProductManager from '../composables/ProductManager.js';
import CartManager from '../composables/CartManager.js';


const userManager = new UserManager();
const productManager = new ProductManager();
const cartManager = new CartManager();



const cartProductsId = computed(() => {
    return cartManager.getProductIdsByUserId(userManager.getCurrentUser())
});

function BuyProductById(productId) {
    if (userManager.getCurrentUser() != null || userManager.getCurrentUser() != "null") {
        cartManager.addToCart(userManager.getCurrentUser(), productId);
    }

}



</script>

<template>
    <h1>TWO</h1>

    <button @click="BuyProductById(0)">Buy Perkele</button>
    <button @click="BuyProductById(1)">Buy Flower Store</button>
    <button @click="cartManager.clearCartByUserId(userManager.getCurrentUser())">clear Cart</button>


    <br>
    <p>users</p>
    {{ userManager.getUsers() }}
    <br>
    <p>products</p>
    {{ productManager.getProducts() }}
    <br>
    <p>cart</p>
    <ul v-if="userManager.getCurrentUser() != null">
        <li v-for="productId in cartProductsId">
            prod : {{ productManager.getProductById(productId) }}
            user : {{ userManager.getCurrentUser() }}
        </li>
    </ul>

</template>

<style scoped></style>


<!-- 

<script setup>

</script>

<template>
    <div class="content">
        <div class="container main">

            
            <div class="main-text-container">
                <h2 class="">The New Game</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eaque est. Laborum illum modi, quasi maxime sed mollitia voluptatem eos odio 
                <br>
                <br>
                <button>Buy Game</button>
            </div>
            <h1 class="title">The 813  Studio</h1>

        </div>

        <div class="container">information 1</div>
        <div class="container">information 2</div>
        <div class="container">information 3</div>

    </div>

</template>

<style scoped>


.main-text-container {


    margin-top: 11vw;

    width: 25vw;
    height: 25vw;
    padding: 2vw;

    
    background-color: #ffffffa4;
    backdrop-filter: blur(1vw);
    border-radius: 1vw;
    box-shadow: 0 0.4vw 0.6vw rgba(0, 0, 0, 0.2);
}
.title{
    color: #f0f0f0;
    
    font-size: 10vw;
    margin-top: 0vw;
    margin-bottom: 0vw;
}

.content {
    padding-top: 0vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
}

.container {
    width: 85vw;
    height: 40vw;
    padding: 2vw;
    background-color: #f0f0f0;
    /* border-radius: 0 0 20vw 20vw; */
    border-radius: 0 0 1vw 1vw;

    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
}


.main {
    margin-top: -5vw;
    padding-top: 0;
    
    height: 40vw; 
    
    background-color: #7b7d7e;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    
}



</style> -->