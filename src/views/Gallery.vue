<template>
        <Carousel/>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Carousel from '@/views/Carousel.vue';

@Options({
    components: {
        Carousel
    }
})
export default class Gallery extends Vue {
    list = [1, 2, 3, 4, 5]
}
</script>

<style scoped>

</style>