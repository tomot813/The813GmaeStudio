<script setup>
import test1 from '../assets/test1.png';
</script>

<template>
	<div class="content">
		<div class="container main">
			<div class="container main-fog"></div>

			<div class="main-text-container">
				<h1 class="main-title">The 813 Studio</h1>
				<p class="main-text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus tempore nisi, aperiam beatae quae voluptatibus quam
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus tempore nisi, aperiam beatae quae voluptatibus quam
					Lorem ipsum dolor sit amet, consectetur adipisicing
				</p>
			</div>

			<img :src="test1" alt="" class="main-img">
		</div>

		<div class="container">information 1</div>
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
	top: 10vw;
	right: 7vw;
	height: 40vw;
    
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
	line-height: 1.5vw;
	height: 15vw;
	background-color: #797979a6;
	color: white;
	backdrop-filter: blur(1vw);
	border-radius: 1vw;
	box-shadow: 0 0.4vw 0.6vw rgba(0, 0, 0, 0.2);
}

.main-text-container {
	position: absolute;
	top: 1vw;
	left: 5vw;
	gap: 1vw;
	width: 40vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.main-title {
	width: 40vw;
	color: #f0f0f0;
	font-size: 7vw;
	margin-bottom: 0vw;
}

.main {
	margin-top: -5vw;
	padding: 2vw;
	padding-top: 0;
	height: 50vw;
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
	height: 50vw;
	background-color: #2e2e2e48;
	box-shadow: 0 0vw 0vw rgba(0, 0, 0, 0);
}
</style>
