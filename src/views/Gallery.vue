<template>
  <div id="gallery" class="container-fluid mt-5">
    <div>
        <h1 class="text-center mb-5">Galerie</h1>
        <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row justify-content-center align-items-center" id="gallery">
                        <div class="col-1">
                            <button class="btn btn-link" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                                <arrow-left-circle-outline class="arrow"></arrow-left-circle-outline>
                            </button>
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths1" />
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths2" />
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths3" />
                        </div>
                        <div class="col-1">
                            <button class="btn btn-link" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                                <arrow-right-circle-outline class="arrow"></arrow-right-circle-outline>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center align-items-center" id="gallery">
                        <div class="col-1">
                            <button class="btn btn-link" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                                <arrow-left-circle-outline class="arrow"></arrow-left-circle-outline>
                            </button>
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths1" />
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths2" />
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths3" />
                        </div>
                        <div class="col-1">
                            <button class="btn btn-link" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                                <arrow-right-circle-outline class="arrow"></arrow-right-circle-outline>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center align-items-center" id="gallery">
                        <div class="col-1">
                            <button class="btn btn-link" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                                <arrow-left-circle-outline class="arrow"></arrow-left-circle-outline>
                            </button>
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths1" />
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths2" />
                        </div>
                        <div class="col-3">
                            <CarouselItem :paths="examplePaths3" />
                        </div>
                        <div class="col-1">
                            <button class="btn btn-link" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                                <arrow-right-circle-outline class="arrow"></arrow-right-circle-outline>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { ArrowRightCircleOutline, ArrowLeftCircleOutline, Fire } from 'mdue';
import CarouselItem from "@/views/CarouselItem.vue";

@Options({
  components: {
    CarouselItem,
    ArrowRightCircleOutline,
    ArrowLeftCircleOutline,
  },
})
export default class Gallery extends Vue {
    
  examplePaths1 = [
    "/mockdata/pictures/picture1.jpg",
    "/mockdata/pictures/picture2.jpg",
    "/mockdata/pictures/picture3.jpg",
  ];
  examplePaths2 = [
    "/mockdata/pictures/picture2.jpg",
    "/mockdata/pictures/picture3.jpg",
    "/mockdata/pictures/picture4.jpg",
  ];
  examplePaths3 = [
    "/mockdata/pictures/picture3.jpg",
    "/mockdata/pictures/picture4.jpg",
    "/mockdata/pictures/picture5.jpg",
  ];
  examplePaths4 = [
    "/mockdata/pictures/picture4.jpg",
    "/mockdata/pictures/picture5.jpg",
    "/mockdata/pictures/picture1.jpg",
  ];
}
</script>

<style scoped>
.arrow {
    color: black;
    font-size: 64px;
}
</style>