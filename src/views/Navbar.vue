<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.jpg" alt="TonArt" width="40" height="40" />
        TonArt
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/galerie">Galerie</router-link>
          <router-link class="nav-link" to="/events">Events</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Vue } from "vue-class-component";

export default class Navbar extends Vue {}
</script>

<style scoped>
</style>
