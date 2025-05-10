<script setup>

</script>

<template>
    <div class="content">
        <div class="container main ">
            <div class="container main-fog"></div>

            <div class="main-text-container">

                <h1 class="title">The 813  Studio</h1>
                <p class="main-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus tempore nisi, aperiam beatae quae voluptatibus quam fugiat officia quia quidem quod necessitatibus ullam adipisci facere iusto dolorum temporibus. Suscipit.
                </p>

            </div>

            <img src="../assets/test1.png" alt="" class="main-img">

        </div>

        <div class="container">information 1</div>
        <div class="container">information 2</div>
        <div class="container">information 3</div>

    </div>

</template>

<style scoped>
.main-img{
    position: absolute;
    top: 10vw;
    right: 5vw;

    z-index: 1;
    height: 35vw;


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

.main-text{
    color: white;
    
    padding: 2vw;

    background-color: #0c0c0c78;
    backdrop-filter: blur(1vw);
    border-radius: 1vw;
    box-shadow: 0 0.4vw 0.6vw rgba(0, 0, 0, 0.2);

}

.main-text-container {
    position: absolute;
    top: 0vw;
    left: -15vw;


    gap: 1vw;


    width: 40vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative; 
}

.title{


    width: 40vw;
    color: #f0f0f0;
    
    font-size: 7vw;
    margin-bottom: 0vw;
}

.content {
    padding-top: 0vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vw;
}

.container {
    width: 85vw;
    height: 40vw;
    padding: 2vw;
    background-color: #f0f0f0;
    border-radius: 0 0 1vw 1vw;

    box-shadow: 0 0.3vw 1vw rgba(0, 0, 0, 0.2);
}


.main {
    margin-top: -5vw;
    padding-top: 0;
    
    height: 45vw; 
    
    background-color: #7b7d7e;
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    
    background-image: url("../assets/NatureBackground.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    image-rendering: pixelated;
}
.main-fog{
    position: absolute;

    
    height: 45vw; 
    background-color: #0c0c0c45;
    box-shadow: 0 0vw 0vw rgba(0, 0, 0, 0);

}



</style>