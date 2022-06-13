<template>
  <div id="events" class="about container">
    <div class="row mt-5">
      <div class="col-md"></div>
      <div class="col-md-8">
          <div class="card text-center">
            <div class="card-body">
                <h1 class="card-title">Veranstaltungen</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Datum</th>
                            <th scope="col">Ort</th>
                            <th scope="col">Beschreibung</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="e in current_events" :key="e">
                            <th scope="row">{{e.date}}</th>
                            <td>Bruchsal</td>
                            <td>{{e.event}}</td>
                        </tr>
                    </tbody>
                </table>
                <!-- Modal Button -->
                <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#eventsModal">Alle Veranstaltungen</button>

                <div class="modal fade" id="eventsModal" tabindex="-1" aria-labelledby="VeranstaltungenModal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Veranstaltungen</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Datum</th>
                                        <th scope="col">Ort</th>
                                        <th scope="col">Beschreibung</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="e in all_events" :key="e">
                                        <th scope="row">{{e.date}}</th>
                                        <td>Bruchsal</td>
                                        <td>{{e.event}}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
      <div class="col-md"></div>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
import events from "@/assets/mockdata/events-mock.json";

export default class Events extends Vue {
    all_events = events.events;
    current_events = this.all_events.slice(0, 5);
}
</script>

<style scoped>
</style>