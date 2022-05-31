<template>
  <div
    class="modal fade"
    id="contactModal"
    tabindex="-1"
    aria-labelledby="KontakteModal"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
      "
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Kontaktformular</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="emailInput" class="form-label"
              >E-Mail Adresse</label
            >
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="name@example.com"
              v-model="dataToSend.mailAddress"
            />
          </div>
          <div class="mb-3">
            <label for="subjectInput" class="form-label"
              >Betreff</label
            >
            <input
              type="text"
              class="form-control"
              id="subjectInput"
              v-model="dataToSend.subject"
            />
          </div>
          <div class="mb-3">
            <label for="textArea" class="form-label"
              >Nachricht</label
            >
            <textarea
              class="form-control"
              id="textArea"
              rows="6"
              v-model="dataToSend.text"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            v-on:click="send()"
          >
            Submit
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { config } from "@/config/config.json";

export default class Contact extends Vue {
    dataToSend: Object = {
        mailAddress: "",
        subject: "",
        text: ""
    }

    public send() {
        console.log("hello")
        fetch(config.backendEndpoint + "send", { // Port 3000
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.dataToSend)
        }).then(res => console.log(res))
    }
}
</script>