const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey =
  "BI5JIRPDW8DxOnOgx8kyM8DoeI5OAXL-LH0cuQvD5KyLXVefNxJUxE3jo84oeA29c2SN3k7dKdkEj8ePrurmnPI";
const privateVapidKey = "33MQ0piTFIUxucDKLrD4hyeVAhZx6fc4hANtyhrUVh8";

webpush.setVapidDetails(
  "mailto:test@gmail.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;
  // console.log(subscription)
  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: subscription });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
