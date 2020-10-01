const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config/config');

const app = express();

/*-------------------------FIREBASE-------------------------*/

const admin = require('firebase-admin');

var serviceAccount = require("./Documents/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-8f658.firebaseio.com"
});

const db = admin.firestore();

/*-------------------------------------------------------*/

app.use(compression());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'my-app', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
  });

app.post('/api/form', (req, res) => {

    var transport = nodemailer.createTransport({
        host: "smtp.dreamhost.com",
        port: 465,
        secure: true,
        auth: {
            user: config.USER,
            pass: config.PASS
        }
    });

    let mailOptions = {
        from: "ContactForm@maximecamille.com",
        to: '"Maxime Camille" <max@maximecamille.com>',
        subject: req.body.subject,
        text: req.body.message,
        html: `
            <h4>Contact</h4>
            <h3>From:</h3>
                <ul>
                    <li>${req.body.fName} ${req.body.lName}</li>
                    <li>${req.body.email}</li>
                </ul>
            <h3>Message:</h3>
                <p>${req.body.message}</p>
        `
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    });



});

app.post('/api/request', (req, res) => {

    var transport = nodemailer.createTransport({
        host: "smtp.dreamhost.com",
        port: 465,
        secure: true,
        auth: {
            user: 'max@maximecamille.com',
            pass: 'Milo-2170'
        }
    });

    let mailOptions = {
        from: "SiteRequest@maximecamille.com",
        to: '"Maxime Camille" <max@maximecamille.com>',
        subject: req.body.site,
        text: req.body.plan,
        html: `
            <h4>Website Request</h4>
            <h3>From: ${req.body.name}</h3>
            <h3>Email: ${req.body.email}</h3>
            <h3>Message:</h3>
                <p>${req.body.desc}</p>
        `
    }

    transport.sendMail(mailOptions, (error, info) => {
        if(error) {
            return console.log(error);
        }

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    });



});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(process.env.NODE_ENV);
});