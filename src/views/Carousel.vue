<template>
<div class="gallery">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card text-white bg-dark">
                        <img src="../assets/logo.jpg" class="obj-fit-cover" alt="">
                        <div class="card-body">
                            <h2 class="card-title">TonArt Bilder</h2>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark">
                        <img src="../assets/logo.jpg" class="obj-fit-cover" alt="">
                        <div class="card-body">
                            <h2 class="card-title">TonArt Bilder</h2>
                        </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark">
                        <img src="../assets/logo.png" class="obj-fit-cover" alt="">
                        <div class="card-body">
                            <h2 class="card-title">TonArt Bilder</h2>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    height: 40vh;
}
.obj-fit-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>