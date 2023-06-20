const mongoose = require("mongoose");

const mongoURI =
  "mongodb://127.0.0.1:27017/duckybook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";

const connectToMongo = async () => {
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Successfully connected to Mongo");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectToMongo;
