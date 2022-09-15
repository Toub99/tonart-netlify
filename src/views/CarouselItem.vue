<template>
  <div class="size card bg-dark text-white">
      <img :src="getImageUrl(thumbnailPath)" alt="thumbnail" />
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
      </div>
  </div>
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
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
}

.card:hover {
  filter: brightness(70%);
}

.size {
  width: 40vh;
  height: 40vh;
}
</style>