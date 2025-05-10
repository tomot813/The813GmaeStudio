import { computed, reactive, watch, ref} from "vue";

const products = ref([])

try{
    if(localStorage.getItem("products") == null){
        products.value = []
        
    }else{
        products.value = JSON.parse(localStorage.getItem("products"))
    }
}catch(error){
    products.value = []
}

watch(products, (newValue)=>{
    localStorage.setItem("products", JSON.stringify(newValue))

},
{deep:true})


class ProductManager {
    static instance = null;
    
    constructor() {
        if (ProductManager.instance) {
            return ProductManager.instance;
        }
        ProductManager.instance = this;

        if (products.value.length == 0) {
            this.createProduct("Perkele", "0/");
            this.createProduct("Flover Store", "0/");
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
    
    createProduct(productName, productData){
        let newProductId = 0
        if(products.value.length > 0){
            newProductId =  products.value[products.value.length-1].id + 1
        }
        products.value.push({
            id: newProductId,
            productName: productName,
            productData: productData
        })
    }

    deleteProductById(productId) {
        const index = products.value.findIndex(p => p.id == productId)
        if (index == -1) {
            return
        }
    
        products.value.splice(index, 1)
    }

}




export default ProductManager;
