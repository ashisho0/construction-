const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const path = require('path')
const cors = require("cors");

const nodemailer = require('nodemailer');

app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());




// This is where the system logs into your email 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: '786aryastark@gmail.com',
    pass: 'aq1sw2de3fr4'
  }
})

// the function for sending mail

function sendEmail(mail) {
  let mailOptions = {
    from: '786aryastark@gmail.com',
    to: 'wtf.lmfao786@gmail.com',
    subject: 'You have a new email from contact us page.',
    html: `<p><strong>Name:</strong>${mail.sendersName}</p>
    <p><strong>Email:</strong>${mail.emailFrom}</p>
    <p><strong>Message:</strong>${mail.emailMsg}</p>
    <p><strong>You have received this message from contact us page</strong></p>`, // req.body.msg
  }

  transporter.sendMail(mailOptions, function (err, done) {
    if (err) {
      console.log("error sending mail", err)
    }
    else {
      console.log("Email sent" + done.response)
    }
  })
}

// this is where you call the function  

app.post('/sendemail', (req, res) => {
  mail = {
    sendersName: req.body.name,
    emailFrom: req.body.email,
    emailMsg: req.body.msg
  }
  sendEmail(mail)
  res.json(mail)
})




app.listen(port, () => {
  console.log('Server listening on port::' + port)
})
