<script setup>
import { ref, computed } from 'vue';

import UserManager from '../composables/UserManager.js';
import ProductManager from '../composables/ProductManager.js';
import CartManager from '../composables/CartManager.js';

const userManager = new UserManager();
const productManager = new ProductManager();
const cartManager = new CartManager();

const vars = defineProps({
    maxCardNumber: 0
})
</script>

<template>

</template>

<style scoped></style>
