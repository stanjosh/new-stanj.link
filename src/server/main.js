const express = require("express");
require('dotenv').config()
const ViteExpress = require("vite-express");
const path = require('path')
const app = express();
const { sendEmail, validateEmail } = require('./util/emailer')
const rateLimiter = require('express-rate-limit')
const limiter = rateLimiter({
  max: 10,
  windowMS: 1000 * 60 * 10,
  message: "Too many requests!"
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));

app.post('/email', limiter, (req, res) => {
  if (validateEmail(req.body.email)) {
    sendEmail(req.body.email, req.body.name, req.body.subject, req.body.message)
    .catch((err) => {
      console.log(err)
      return res.status(400).send(err.message)
    })
    .then(() => {
      return res.status(200).send("OK")
    })
  } else {
    return res.status(400).send('Email address is invalid.')
  }

})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.' })
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
