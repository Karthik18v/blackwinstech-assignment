const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bittukarthik77:ajJ8esYHuI2n3g7S@cluster0.19c2b.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo Connection Error"));
db.once("open", () => {
  console.log("Connected to Mongo successfully!");
});

module.exports = db;
