import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routers.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { register } from "./controllers/register.js";
import { login } from "./controllers/login.js";
import { getUserData } from "./controllers/getUserData.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.get("/", router);
app.get("/userData", getUserData);

app.post("/register", register);

app.post("/login", login);

// create global error handler

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch((error) => console.log(`error connecting to MONGO: ${error}`));
