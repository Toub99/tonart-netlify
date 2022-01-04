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
      <h4 id="events">Second heading</h4>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component'
import Navbar from '@/views/Navbar.vue'
import About from '@/views/About.vue'

@Options({
  components: {
    Navbar,
    About
  }
})
export default class App extends Vue {
    transition() {
      console.log('hello')
      el = document.getElementById('transit')
      el.classList.add('less-margin')
    }
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
  position: fixed;
  animation: slide-up 1s;
  margin-top: 50vh;
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
