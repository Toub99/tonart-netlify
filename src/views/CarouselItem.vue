<template>
  <div>
    
      <img :src="getImageUrl(thumbnailPath)" class="card-img-top" alt="thumbnail" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <!-- <img
      v-for="path in paths"
      :src="getImageUrl(path)"
      alt="Test"
      ref="images"
      :key="path"
    /> -->
</template>

<script lang="ts">
import { Prop } from "vue-property-decorator";
import { Vue } from "vue-class-component";

export default class CarouselItem extends Vue {
  @Prop({ default: [] })
  public paths!: string[];

  private thumbnailPath = this.paths[0];
  private thumbnailImg = '<img src="' + this.thumbnailPath + '">';

  getImageUrl(path: string) {
    return require("../assets" + path);
  }
}
</script>

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