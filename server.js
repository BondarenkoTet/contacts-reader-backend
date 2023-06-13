const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Tetiana:NMCxyAvM2b.B6Fh@cluster0.uoeluru.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
