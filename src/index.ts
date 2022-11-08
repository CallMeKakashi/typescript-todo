import path from "path";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import http from "http"
import config from "./config"
import morgan from "morgan"
import fs from "fs"
import requestIp from "request-ip"
import helmet from "helmet"
import routes from "./api/routes"
import db from "./api/models"

dotenv.config({ path: path.join(__dirname, ".env") });
const app = express();
const port = process.env.PORT || 3131;
const httpServer = http.createServer(app);


const corsOptions = {
  origin: true,
  optionsSuccessStatus: 204,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
};



// security options
app.disable("x-powered-by");
app.use(cors(corsOptions));
app.use(helmet());

// express options
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(requestIp.mw());


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access-full.log"),
  {
    flags: "a"
  }
);

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  next();
});

// import routes
app.use("/api", routes);

const connectToPostgres = async () => await db.sequelize.authenticate();

connectToPostgres()
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err: any) => {
    console.error("Could not connect to the database. Exiting now...", err);
  });


// root route
app.get("/", function (req, res, next) {
  res.status(200).send("Welcome to Wekaala API!");
});

// open server
httpServer.listen(port, function () {
  console.log(" REST API server Started on " + port);
});

