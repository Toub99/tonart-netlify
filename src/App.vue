<template>
  <div id="app">
    <Navbar/>
    <div id="background-image" class="background-image">
      <div id="transit" class="transit">
        <button type="button" class="btn btn-lg btn-outline-light mx-2">Über uns</button>
        <button type="button" class="btn btn-lg btn-outline-light mx-2">Veranstaltungen</button>
      </div>
    </div>
    <div data-bs-spy="scroll" data-bs-target="#nav" data-bs-offset="0" class="scrollspy-example" style="height: 200vh" tabindex="0">
      <About/>
      <hr/>
      <Events/>
      <hr/>
      <Gallery/>
    </div>
  </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component'
import Navbar from '@/views/Navbar.vue'
import About from '@/views/About.vue'
import Events from '@/views/Events.vue'
import Gallery from '@/views/Gallery.vue'

@Options({
  components: {
    Navbar,
    About,
    Events,
    Gallery
  }
})
export default class App extends Vue {
}
</script>

<style>
:root {
  --margin-top: 100vh
}

.background-image {
  display: flex;
  background-image: url('assets/logo.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: top;
  background-color: black;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;
  /* background-attachment: fixed; */
  height: 100vh;
}

.transit {
  animation: slide-up 1s;
  margin-top: 50vh;
  scroll-behavior: unset;
  /* transition: margin-top 1s; */
}

/* #app:hover #transit {
  margin-top: 50vh;
} */


@keyframes slide-up {
  from {
    margin-top: 100vh;
    opacity: 0;
  }

  to {
    margin-top: 50vh;
    opacity: 1;
  }
}

@keyframes slide-up30 {
  from {
    margin-top: 100vh;
    opacity: 0;
  }

  to {
    margin-top: 30vh;
    opacity: 1;
  }
}

@media (max-width: 991.98px) {
  .background-image {
  display: flex;
  background-image: url('assets/logo.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: top;
  background-color: black;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;
  /* background-attachment: fixed; */
  height: 75vh;
}
}

@media (max-width: 767.98px) {
  .background-image {
    display: flex;
    background-image: url('assets/logo.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: top;
    background-color: black;
    background-attachment: fixed;
    justify-content: center;
    align-items: center;
    /* background-attachment: fixed; */
    height: 50vh;
  }

  .transit {
  position: fixed;
  animation: slide-up30 1s;
  margin-top: 30vh;
  /* transition: margin-top 1s; */
}
}

/* @media (min-width: 1217px) {
  .background-image {
    background-image: url('assets/logo.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: top;
    background-color: black;
    /* background-attachment: fixed; */
    /* height: 100vh;
  } 
} */
</style>
