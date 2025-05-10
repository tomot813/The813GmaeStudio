<script setup>
import UserManager from '../composables/UserManager.js';

const userManager = new UserManager();
</script>

<template>
        <div class="content">
        <div class="container main">information 1</div>
        <div class="container main">information 2</div>
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
    margin-top: 0; 
    padding-top: 0;
    height: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

</style>