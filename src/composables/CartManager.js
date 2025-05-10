import { computed, reactive, watch, ref } from "vue";

const cartItems = ref([])

try {
    if (localStorage.getItem("cartItems") == null) {
        cartItems.value = []

    } else {
        cartItems.value = JSON.parse(localStorage.getItem("cartItems"))
    }
} catch (error) {
    cartItems.value = []
}

watch(cartItems, (newValue) => {
    localStorage.setItem("cartItems", JSON.stringify(newValue))

},
    { deep: true })


class CartManager {
    static instance = null;

    constructor() {
        if (CartManager.instance) {
            return CartManager.instance;
        }
        CartManager.instance = this;
    }

    // getCartByUserId(userId){
    //     const cartItem = cartItems.value.find(item => item.userId == userId)

    //     if (!cartItem) {
    //         return null
    //     }

    //     return cartItem
    // }

    getProductIdsByUserId(userId) {
        const userCartItems = cartItems.value.filter(item => item.userId === userId);
        const productIds = userCartItems.map(item => item.productId);
        return productIds;
    }

    addToCart(userId, productId) {
        const exists = cartItems.value.some(item => item.userId == userId && item.productId == productId);
        if (!exists) {
            cartItems.value.push({ userId, productId });
        }
    }

    clearCartByUserId(userId) {
        for (let i = cartItems.value.length - 1; i >= 0; i--) {
            if (cartItems.value[i].userId == userId) {
                cartItems.value.splice(i, 1);
            }
        }
    }

}




export default CartManager;
