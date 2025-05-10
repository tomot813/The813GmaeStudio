<script setup>
import { ref, computed, reactive } from "vue";

import UserManager from '../composables/UserManager.js';

const userManager = new UserManager();

const user = reactive({
    name: "",
    id: 0,
    password: "",
    email: "",
    currentUser: 0

})


function createUser() {
    if (user.name != "" && user.password != 0 && user.name != "") {
        if (userManager.createUser(user.name, user.password, user.email)) {
            user.name = ""
            user.email = ""
            user.password = ""

        } else {
            alert("i know this email.")
        }
    }
}




function deleteCurentUser() {
    userManager.deleteUsersById(userManager.getCurrentUser())
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



</script>

<template>
    <h1>ONE</h1>




    <div>
        <input type="text" placeholder="name" v-model="user.name">
        <input type="email" placeholder="email" v-model="user.email">
        <input type="password" placeholder="password" v-model="user.password">
        <button @click="login">login</button>
        <button @click="createUser">Create</button>
    </div>



    <div>
        <button @click="deleteCurentUser">Delete Current User</button>
    </div>




    {{ userManager.getUsers() }}

    <br>
    {{ userManager.getUserById(userManager.getCurrentUser()) }}
</template>

<style scoped></style>