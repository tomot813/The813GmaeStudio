import { computed, reactive, watch, ref } from "vue";

import test1Img from '../assets/test1.png'
import natureBg from '../assets/NatureBackground.png'
import perkeleImg from '../assets/perkele2.png'
import perkeleBg from '../assets/perkele.png'


const products = ref([])

try {
    if (localStorage.getItem("products") == null) {
        products.value = []

    } else {
        products.value = JSON.parse(localStorage.getItem("products"))
    }
} catch (error) {
    products.value = []
}

watch(products, (newValue) => {
    localStorage.setItem("products", JSON.stringify(newValue))

},
    { deep: true })

products.value = []


let description_perkele = "Безумное приключение в мире, где всё пошло не так. После взрыва завода по производству мятных жевательных резинок, маленький финский городок превращается в эпицентр хаоса. Местные звери мутируют, соседи сходят с ума, а ты — уставший почтальон с клюшкой — должен навести порядок, раздавая газеты, устраняя угрозы и выясняя, что вообще произошло."
let description_flower_store = "Вы — владелец цветочного магазина в уютном городке на острове. Исследуйте окрестности, собирайте редкие цветы или выращивайте их в теплице во дворе. Украшайте витрины, улучшайте магазин. Ваша цель — превратить скромный цветочный уголок в самое красивое место на всём острове."
class ProductManager {
    static instance = null;

    constructor() {
        if (ProductManager.instance) {
            return ProductManager.instance;
        }
        ProductManager.instance = this;

        if (products.value.length == 0) {
            this.createProduct("Flower Store", description_flower_store, "10$", test1Img, natureBg, "/The813GmaeStudio/download/flower.txt",);

            this.createProduct("Perkele", description_perkele, "100$", perkeleImg, perkeleBg, "/The813GmaeStudio/download/perkele.txt",);

        }
    }


    getProducts() {
        return products.value;
    }

    getProductById(id) {
        const product = products.value.find(p => p.id == id)

        if (!product) {
            return null
        }

        return product
    }

    createProduct(productName, productDescription, productPrice, productImgUrl, productBackgroundImgUrl, productData) {
        let newProductId = 0
        if (products.value.length > 0) {
            newProductId = products.value[products.value.length - 1].id + 1
        }
        products.value.push({
            id: newProductId,
            name: productName,
            description: productDescription,
            price: productPrice,
            imgUrl: productImgUrl,
            backgroundImgUrl: productBackgroundImgUrl,
            data: productData
        })
    }

    deleteProductById(productId) {
        const index = products.value.findIndex(p => p.productId == productId)
        if (index == -1) {
            return
        }

        products.value.splice(index, 1)
    }

}




export default ProductManager;
