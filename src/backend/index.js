const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const config = require("../config/config.json")

const app = express();
app.use(bodyParser.json({extended: true}));

// ########## config #######################

var corsOptions = {
  origin: config.config.frontendEndpoint,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var transporter = nodemailer.createTransport({
  host: 'securesmtp.t-online.de',
  port: 465,
  secure: true,
  auth: {
    user: 'tobeyora@t-online.de',
    pass: 'DieSims3.'
  }
});

// ############ Server Endpoints ###############################

app.options('/send', cors()) // enable pre-flight request

app.get("/", (req, res) => {
    res.end("Backend providing Email Service via nodemailer")
})

app.post("/send", cors(), (req, res) => {
    var mailOptions = {
      from: 'youremail@gmail.com', // will be overwritten by t-onlie smtp server to 'tobeyora@t-online.de
      to: 'ubixh@student.kit.edu',
      subject: req.body.subject,
      text: req.body.text + "\n \n" + "Antwort senden an: " + req.body.mailAddress,
      replyTo: req.body.mailAddress
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    }); 
    console.log(req.body)
    res.end("Ende der Antwort!")
})

app.listen(3000, () => {
    console.warn("Server is running on 3000")
})