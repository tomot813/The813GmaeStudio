import { computed, reactive, watch, ref } from "vue";
import CartManager from "./CartManager";


const users = ref([])
const currentUser = ref()



try {
    if (localStorage.getItem("users") == null) {
        users.value = []
    } else {
        users.value = JSON.parse(localStorage.getItem("users"))
    }
} catch (error) {
    users.value = []
}

watch(users, (newValue) => {
    localStorage.setItem("users", JSON.stringify(newValue))

},
    { deep: true })



if (localStorage.getItem("currentUser") == null || localStorage.getItem("currentUser") == "null") {
    currentUser.value = null
} else {
    currentUser.value = Number(localStorage.getItem("currentUser"))
}

watch(currentUser, (newValue) => {
    localStorage.setItem("currentUser", newValue)

})

// users.value = []

const cartManager = new CartManager()

class UserManager {
    static instance = null;

    constructor() {
        if (UserManager.instance) {
            return UserManager.instance;
        }
        UserManager.instance = this;

        // if (users.value.length == 0) {
        //     this.createUser("123", "123", "123")
        //     this.loginUser("123", "123", "123")
        // }
    }

    getUsers() {
        return users.value;
    }

    getCurrentUser() {
        return currentUser.value
    }

    setCurrentUser(userId) {
        if (typeof userId != "number" || !Number.isInteger(userId)) {
            return;
        }
        const user = users.value.find(u => u.id == userId);
        if (!user) {
            return;
        }
        currentUser.value = userId;
    }


    createUser(userUame, userPassword, userEmail) {
        const existingEmail = users.value.find(u => u.email == userEmail.trim());
        if (existingEmail) {
            return false;
        }

        let newUserId = 0;
        if (users.value.length > 0) {
            newUserId = users.value[users.value.length - 1].id + 1
        }


        users.value.push({
            id: newUserId,
            name: userUame,
            password: userPassword,
            email: userEmail
        });
        return true;

    }


    deleteUsersById(userId) {
        const index = users.value.findIndex(u => u.id == userId)
        if (index == -1) {
            return
        }

        cartManager.clearCartByUserId(userId)
        users.value.splice(index, 1)

        if (currentUser.value == userId) {
            currentUser.value = null
        }
    }


    getUserById(id) {
        const user = users.value.find(u => u.id === id)

        if (!user) {
            return null
        }

        return user
    }


    loginUser(name, password, email) {
        if (typeof name != "string" || typeof password != "string" || typeof email != "string") {
            return false;
        }
        const user = users.value.find(u =>
            u.name == name.trim() &&
            u.password == password.trim() &&
            u.email == email.trim()
        );

        if (!user) {
            return false;
        }

        currentUser.value = user.id;
        return true;
    }
    logoutUser() {
        currentUser.value = null
    }

}

export default UserManager;



// const test = computed(() => userManager.getTest());
