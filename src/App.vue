<template>
  <div id="app">
    <Navbar/>
    <div class="background-image">
    </div>
    <div>
      <h1>hello</h1>
    </div>
  </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component'
import Navbar from '@/views/Navbar.vue'

@Options({
  components: {
    Navbar
  }
})
export default class App extends Vue {

}
</script>

<style>
.background-image {
  background-image: url('assets/logo.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: top;
  /* background-attachment: fixed; */
  height: 100vh;
}

@media (min-width: 1217px) {
  .background-image {
    background-image: url('assets/logo.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: top;
    background-color: black;
    /* background-attachment: fixed; */
    height: 100vh;
  }
}
</style>
