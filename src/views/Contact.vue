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
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="textArea" class="form-label"
              >Example textarea</label
            >
            <textarea
              class="form-control"
              id="textArea"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
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

<script>
import { Vue } from "vue-class-component";
import nodemailer from "nodemailer";

export default class Contact extends Vue {
    transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "tobeyora99@gmail.com",
            password: "DieSims3."
        }
    })

    mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    send() {
        this.transporter.sendMail(this.mailOptions, (err, info) => err ? console.log(err) : console.log("Success: " + info.response));
    }
}
</script>