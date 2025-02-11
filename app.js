const express = require("express");
const contactRoute = require("./routes/contactRoute");
const db = require("./config/db");

require("dotenv").config();

const app = express();
app.use(express.json());

app.listen(4000, () => console.log(`Server Running At http://localhost:4000`));
app.use("/", contactRoute);

module.exports = app;
