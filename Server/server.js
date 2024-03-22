// in package.json wordt via type="module" aangegeven dat we ES6 module syntax gebruiken
import express from "express";
import { join } from "path";

import __dirname from "./__dirname.js";

const app = express();

// De poort is niet meer hardgecodeerd: de de host van deze server kan zelf bepalen op welke poort het moet draaien.
// Als er geen poort wordt doorgegeven dan zal de server standaard op poort 3000 draaien.
const port = process.env.PORT ? process.env.PORT : 3009;

// De static files middleware registreren
app.use("/", express.static(join(__dirname, 'public','browser')));

app.listen(port, () => {
  console.log(`Node-Express server listening on port ${port}`);
});