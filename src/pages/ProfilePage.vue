<script setup>
import { ref, computed,reactive } from 'vue';

import UserManager from '../composables/UserManager.js';
import ProductManager from '../composables/ProductManager.js';
import CartManager from '../composables/CartManager.js';

const userManager = new UserManager();
const productManager = new ProductManager();
const cartManager = new CartManager();

const cartProductsId = computed(() => {
    return cartManager.getProductIdsByUserId(userManager.getCurrentUser()) || [];
});



const isRevealed = ref(false);
const maskedText = computed(() => '•'.repeat(currentUser.value?.password?.length || 0));
function toggleSpoiler() {
    isRevealed.value = !isRevealed.value;
}


const user = reactive({
    name: "",
    id: 0,
    password: "",
    email: "",
    currentUser: 0

})
const currentUser = computed(() => {
    return userManager.getUserById(userManager.getCurrentUser())
});
function deleteUser(){
    userManager.deleteUsersById(userManager.getCurrentUser())
}
function logout(){
    userManager.logoutUser()
}

function createUser() {
    if (user.name != "" && user.password != 0 && user.name != "") {
        if (userManager.createUser(user.name, user.password, user.email)) {
            userManager.loginUser(user.name, user.password, user.email)

            user.name = ""
            user.email = ""
            user.password = ""

        } else {
            alert("i know this email.")
        }
    }
}

function login() {
    if (userManager.loginUser(user.name, user.password, user.email)) {
        user.name = ""
        user.email = ""
        user.password = ""
    } else {
        alert("u cant login")
    }
}

function downloadFile() {
    const link = document.createElement('a');
    link.href = '/The813GmaeStudio/download/test.txt'; 
    link.download = 'test.txt'; 
    link.click();
}
</script>

<template>
    <div class="content" >
        <div class="container main">
            <div class="container main-fog"></div>

            <h1 class="title">Профиль</h1>
        </div>

        <div class="container user-card" v-if="userManager.getCurrentUser() != null">
            <div class="user-info">
                <img src="../assets/login_profile.png" alt="">
                <div class="user-info-fog"></div>
                <h2>Имя:{{ currentUser.name }}</h2>
                <p>Email: {{ currentUser.email }}</p>

                <p @click="toggleSpoiler" class="spoiler" :class="{ revealed: isRevealed }">
                    Пароль: {{ isRevealed ? currentUser.password : maskedText }}
                </p>

                <div class="user-info-btn">
                    <button @click="logout()">Выйти из акаунта</button>
                    <button @click="deleteUser()">Удалить акаунт</button>
                </div>
            </div>
            
            <div class="user-games">
                <div class="user-games-card" v-for="productId in cartProductsId"  :style="{
                        backgroundImage: `url(${productManager.getProductById(productId).backgroundImgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom'
                    }">
                    <div class="user-games-card user-games-card-fog"></div>
                    <div class="user-games-card-text">
                        <h2>{{ productManager.getProductById(productId).name }}</h2>
                        <button class="user-games-card-text-btn" @click="downloadFile()">Играть</button>
                    </div>
                    
                </div>
            </div>


        </div>
        
        <div class="container login-card" v-if="userManager.getCurrentUser() == null">
            <div class="login-fog"></div>
            <div class="login-content">
                <h2>Добро пожаловать!</h2>
                <input type="text" placeholder="Имя" v-model="user.name">
                <input type="email" placeholder="Email" v-model="user.email">
                <input type="password" placeholder="Пароль" v-model="user.password">
                <div class="login-buttons">
                    <button @click="login()">Войти</button>
                    <button @click="createUser()">Создать аккаунт</button>
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
    width: 85vw;
    height: 42vw;
    background-color: #f0f0f0;
    border-radius: 1vw;
    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
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


.user-card{
    display: flex;
    flex-direction: row;
}

.user-info{
    position: relative; 
    overflow: hidden; 
    line-height: 1.5vw;

    width:25vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw;
    padding-top: 5vw;
    gap: 2vw;

    background-image: url("../assets/NatureBackground.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    border-radius: 1vw 0vw 0vw 1vw;

    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
    
}

.user-info p, .user-info h2, .user-info img{
    color: white;
    z-index: 1;
}

.user-info img{
    margin-top: -3vw;
    height: 9vw;
    width: 9vw;
}

.user-info-btn{
    display: flex;
    flex-direction: column;
    gap: 2vw;


    margin-top: 3vw;
    z-index: 1;
}
.user-info-btn button{
    background-color: rgb(218, 92, 92);
}

.user-info-fog{

    position: absolute;
    top: 0vw;
    left: 0vw;

    width: 30vw;
    height: 65vw;


    background-color: #797979a6;
    

    backdrop-filter: blur(0.6vw);
}

.user-games {
    width: 60vw;
    border-radius: 0vw 1vw 1vw 0;
    padding: 2vw;
    display: flex;
    flex-wrap: wrap;  
    gap: 2vw;
}

.user-games-card {
    position: relative; 
    overflow: hidden; 

    width: 14vw;  
    height: 15vw;
    
    background-color: #f0f0f0;
    border-radius: 1vw;
    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
}

.user-games-card-text{
    transition: bottom 0.3s;
    
    position: relative; 
    bottom: -10vw;
    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
    padding-top: 1vw;
    
    width: 100%;
    height: 20vw;

    font-size: 0.7vw;
    color: rgb(255, 255, 255);
    background-color: #79797956;

    backdrop-filter: blur(1vw);

}
.user-games-card-text-btn{
    width: 10vw;
    background-color: #5cbd5f;
    color: white;
    transition: background-color 0.3s;
}

.user-games-card-text:hover{
    bottom: -6vw;
    color: #5cbd5f;
    background-color: #ffffff;
}



.user-games-card-fog{
    position: absolute;

    width: 14vw;  
    height: 15vw;

    background-color: #79797900;

}





.spoiler {
    cursor: pointer;
    color: transparent;
    border-radius: 0.3em;
    padding: 0.2em 0.4em;
    user-select: none;
    transition: color 0.3s ease;
}

.spoiler.revealed {
    background-color: transparent;
}




.login-card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    height: 45vw;
    background-image: url("../assets/NatureBackground.png");
    background-size: cover;
    background-position: center;
    border-radius: 1vw;
    overflow: hidden;
}

.login-fog {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #797979a6;
    backdrop-filter: blur(0.6vw);
    z-index: 0;
}

.login-content {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vw;
    padding: 2vw;
    width: 30vw;
    color: white;
}

.login-content h2 {
    font-size: 2vw;
    margin-bottom: 1vw;
}

.login-content input {
    width: 100%;
    padding: 0.6vw;
    border-radius: 0.5vw;
    border: none;
    outline: none;
    font-size: 1vw;
}

.login-buttons {
    display: flex;
    gap: 1vw;
    margin-top: 1vw;
}

.login-buttons button {
    padding: 0.6vw 1.2vw;
    font-size: 1vw;
    border: none;
    border-radius: 0.5vw;
    cursor: pointer;
    background-color: #5cbd5f;
    color: white;
    transition: background-color 0.3s;
}

.login-buttons button:hover {
    color: #5cbd5f;
    background-color: #ffffff;
}

</style>