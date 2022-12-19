// * TYPES AND INTERFACES
import { Request, Response } from "express";

// * DEPENDENCIES
import express from "express";
import cors from "cors";

// * ENVIRONMENT VARIABLES
import {
  REST_API,
  DATABASE_URL,
  JWT_SECRET,
  SESSION_COOKIE_NAME,
} from "./configs";

// * CONNECTION DB
import { connectToDatabase } from "./configs/mongoDbConnection";
connectToDatabase()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err: Error) => {
    console.error("Database connection failedd", err);
    process.exit();
  });

// * PORT APP
// * QUIZAS ESTE PORT DEBEBÍAMOS PASARSELO POR ARG O ENV YA SEA DOCKERFILE O DOCKER COMPOSE
const PORT = process.env.PORT || 4000;

// * ROUTES
import products from "./routes/products";

// * APP
const app = express();

// * MIDDLEWARES
app.use(
  cors({
    origin: [
      // Leandro Code
      "http://localhost:3000",
      "http://192.168.1.100:3000",
    ],
    credentials: true,
  })
);
app.use(express.json());

// * USE ROUTES
products(app);

// * FIRST ROUTE
app.get("/", (req: Request, res: Response) => {
  return res.send(`<div
        style="display: flex; flex-direction:column;justify-content: center; align-items: center; width: 100%; min-height: 100vh; margin: 0; padding: 0; font-size: 1rem;">
        <div>REST API ECO</div><div>REST_API: ${REST_API}</div><div>JWT_SECRET: ${JWT_SECRET}</div><div>SESSION_COOKIE_NAME: ${SESSION_COOKIE_NAME}</div> <div>DATABASE_URL: ${DATABASE_URL}</div></div>`);
});

// * APP LISTEN
app.listen(PORT, () => console.log(REST_API));
