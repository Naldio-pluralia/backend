const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/oministack", {
  useNewUrlParser: true
});

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require("./routes"));

app.listen(process.env.PORT || 3333);
