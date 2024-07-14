import express from "express";
import mongoose from "mongoose";
import { PORT, connectionString } from "./config.js";
import bookRoute from "./routes/bookRoute.js";
const app = express();

app.use(express.json()); // middleware used to parse the request body
//First api

app.use("/books", bookRoute); //Refactor all Book route to seperate file

app.get("/", (req, res) => {
  res.send("Congratulations on your first api");
});

const respondToClient = () => {
  //Tell our app to run on particular port, and call a callback method to log to console
  app.listen(PORT, () => {
    console.log(`Server is listening at port : ${PORT}`);
  });
};

//Connect to MongoDB via mongoose ORM
const connectToMongoDBDatabaseAndStartServer = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to DB Successfully......");
    respondToClient();
  } catch (error) {
    console.log("Connection failed......");
  }
};

connectToMongoDBDatabaseAndStartServer();