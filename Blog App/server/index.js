import express from "express";
import cors from "cors";
import router from "./Router/userRoutes.js";
import databaseConnection from "./connection.js";
import multer from 'multer'
const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors());
// connection
databaseConnection("mongodb://localhost:27017/blogify")
app.use(express.json())
app.use(router)


app.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  } else {
    console.log(`Server started at http://localhost:${PORT}`);
  }
});

