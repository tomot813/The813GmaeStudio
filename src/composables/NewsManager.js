import { computed, reactive, watch, ref } from "vue";

import test1Img from '../assets/test1.png'
import natureBg from '../assets/NatureBackground.png'

import perkeleImg from '../assets/theGameAwardsStatue.png'
import perkeleBg from '../assets/perkele.png'


const newss = ref([])

try {
    if (localStorage.getItem("newss") == null) {
        newss.value = []

    } else {
        newss.value = JSON.parse(localStorage.getItem("newss"))
    }
} catch (error) {
    newss.value = []
}

watch(newss, (newValue) => {
    localStorage.setItem("newss", JSON.stringify(newValue))

},
    { deep: true })

newss.value = []


let description_perkele = "Perkele — игра года по версии The Game Awards. В ней маленький финский городок превращается в рассадник хаоса после взрыва завода по производству мятных жевательных резинок. На улицах появляются тролли, автомат с хот-догами становится мэром, а фонари спорят о философии Канта. Главный герой — почтальон с клюшкой, который должен доставить три последние газеты в районы, где правят чайки. Игра сочетает выживание, скейтбординг по канализационным трубам и сражения с говорящими холодильниками. Система морали позволяет выбрать, спасать мир или превратить его в батут из kalastaa. Критики считают игру 'воплощением скандинавской тревожности' и 'сновидениями в реальности'."
let description_flower_store = "Вы — владелец цветочного магазина в уютном городке на острове. Исследуйте окрестности, собирайте редкие цветы или выращивайте их в теплице во дворе. Украшайте витрины, улучшайте магазин. Ваша цель — превратить скромный цветочный уголок в самое красивое место на всём острове."
class NewsManager {
    static instance = null;

    constructor() {
        if (NewsManager.instance) {
            return NewsManager.instance;
        }
        NewsManager.instance = this;

        if (newss.value.length == 0) {
            this.createNews("Наша новая ира - Flower Store", description_flower_store, "10.04.2025", test1Img, natureBg, "testUrlEXE",);

            this.createNews("The Game Awards 'Perkele - игра года'", description_perkele, "31.02.2025", perkeleImg, perkeleBg, "testUrlEXE",);

        }
    }


    getNewss() {
        return newss.value;
    }

    getNewsById(id) {
        const news = newss.value.find(p => p.id == id)

        if (!news) {
            return null
        }

        return news
    }

    createNews(newsName, newsDescription, newsDate, newsImgUrl, newsBackgroundImgUrl, newsData) {
        let newNewsId = 0
        if (newss.value.length > 0) {
            newNewsId = newss.value[newss.value.length - 1].id + 1
        }
        newss.value.push({
            id: newNewsId,
            name: newsName,
            description: newsDescription,
            date: newsDate,
            imgUrl: newsImgUrl,
            backgroundImgUrl: newsBackgroundImgUrl,
            data: newsData
        })
    }

    deleteNewsById(newsId) {
        const index = newss.value.findIndex(p => p.newsId == newsId)
        if (index == -1) {
            return
        }

        newss.value.splice(index, 1)
    }

}




export default NewsManager;
