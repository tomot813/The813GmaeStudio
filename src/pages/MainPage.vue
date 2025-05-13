<script setup>
import test1 from '../assets/test1.png';
</script>

<template>
	<div class="content">
		<div class="container main">
			<div class="container main-fog"></div>

			<div class="main-text-container">
				<h1 class="main-title">The 813 Studio</h1>
				<!-- <p class="main-text">
					— независимая студия, создающая абсурдные, атмосферные и сюжетные игры с неожиданным юмором. В проектах сочетаются выживание, философия, уют и хаос: от цветочного магазина на острове до почтальона в городе, где автомат с хот-догами стал мэром.
				
				</p> -->
			</div>

			<img :src="test1" alt="" class="main-img">
		</div>

		<div class="container container-text">
            <div class="about-text">
                <h1 >Про Студию</h1>
                <p >Мы — студия 813, и мы делаем игры, которые невозможно забыть. Нас вдохновляет абсурд, повседневность, тревожные сны и северная мятная жвачка. Мы любим экспериментировать с жанрами и смешивать несмешиваемое: философию и троллей, скейтбординг и газеты, уют и безумие. В наших играх можно выращивать цветы в теплице или драться с говорящими холодильниками. Главное — чтобы было по-настоящему, странно и интересно. 813 — это немного хаоса, немного красоты и всегда что-то не так.</p>

            </div>
            <img class="abiut-img" src="../assets/perkele2.png" alt="">

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
	height: 40vw;
	background-color: #f0f0f0;
	border-radius: 0 0 1vw 1vw;
	box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
}

.main-img {
	position: absolute;
	top: 4vw;
	right: 7vw;
	height: 37vw;
    
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges; 
    image-rendering: -o-crisp-edges;   
    image-rendering: -webkit-optimize-contrast; 
    image-rendering: optimize-contrast;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: optimizeSpeed; 
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}

.main-text {
	padding: 2vw;
	line-height: 1.7vw;
	font-size: 1.1vw;
	height: 15vw;
	background-color: #797979a6;
	color: white;
	backdrop-filter: blur(1vw);
	border-radius: 1vw;
	box-shadow: 0 0.4vw 0.6vw rgba(0, 0, 0, 0.2);
}

.main-text-container {
	position: absolute;
	top: 5vw;
	left: 8vw;
	gap: 1vw;
	width: 40vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.main-title {
	width: 50vw;
	color: #f0f0f0;
	font-size: 8vw;
	margin-bottom: 0vw;
}

.main {
	margin-top: -5vw;
	padding: 2vw;
	padding-top: 0;
	height: 40vw;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-image: url("../assets/NatureBackground.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: bottom;
	image-rendering: pixelated;
}

.main-fog {
	position: absolute;
	padding: 2vw;
	height: 40vw;
	background-color: #2e2e2e48;
	box-shadow: 0 0vw 0vw rgba(0, 0, 0, 0);
}


.container-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.about-text {
    padding: 5vw;
    text-align: left;

    height: 20vw;
    line-height: 1.4vw;
    font-size: 1.2vw;
    flex: 1; 
}
.about-text h1{
    margin-top: -6vw;

}

.abiut-img  {
    width: 30vw;
    height: 40vw;
    object-fit: cover;
    border-radius: 1vw;
    flex-shrink: 0;
    z-index: 1;

    image-rendering: pixelated;
    image-rendering: crisp-edges;
    image-rendering: -moz-crisp-edges; 
    image-rendering: -o-crisp-edges;   
    image-rendering: -webkit-optimize-contrast; 
    image-rendering: optimize-contrast;
    image-rendering: -webkit-crisp-edges;
    image-rendering: pixelated;
    image-rendering: optimizeSpeed; 
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}

</style>
