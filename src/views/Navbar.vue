<template>
  <nav id="nav" class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.jpg" alt="TonArt" width="40" height="40" />
        TonArt
      </a>
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
          <a class="nav-link" href="#about">Über uns</a>
          <a class="nav-link" href="#events">Veranstaltungen</a>
          <a class="nav-link" href="#gallery">Galerie</a>
          <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#contactModal">Kontakt</a>
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
