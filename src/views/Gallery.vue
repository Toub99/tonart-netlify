<template>
    <div class="row row-cols-4" id="gallery">
        <div class="col">
            <div class="card h-100" style="width: 18rem">
                <CarouselItem :paths="examplePaths1" />
            </div>
        </div>
        <div class="col">
            <div class="card h-100" style="width: 18rem">
                <CarouselItem :paths="examplePaths2" />
            </div>
        </div>
        <div class="col">
            <div class="card h-100" style="width: 18rem">
                <CarouselItem :paths="examplePaths3" />
            </div>
        </div>
        <div class="col">
            <div class="card h-100" style="width: 18rem">
                <CarouselItem :paths="examplePaths4" />
            </div>
        </div>
    </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import CarouselItem from '@/views/CarouselItem.vue';

@Options({
    components: {
        CarouselItem
    }
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

</style>