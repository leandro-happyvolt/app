// * TYPES AND INTERFACES
import { Request, Response, Express } from "express";

// * DEPENDENCIES
import express from "express";
import prismaClient from "../libs/prismaClient";

function products(app: Express) {
  const router = express.Router();
  // * PREFIX OF THIS ENDPOINTS
  app.use("/api/products", router);

  router.get("/", async (req: Request, res: Response) => {
    return res
      .status(200)
      .json([{ name: "casa", price: "20000", envMode: process.env.ENV_MODE }]);
  });

  router.get("/mongodb", async (req: Request, res: Response) => {
    return res
      .status(200)
      .json([{ name: "casa", price: "20000", envMode: process.env.ENV_MODE }]);
  });

  /* router.get("/getAll", async (req: Request, res: Response) => {
    try {
      const users = await prismaClient.user.findMany();
      console.log(users)
      return res.status(200).json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error", err });
    }
  });

  router.get("/create", async (req: Request, res: Response) => {
    try {
      const user = await prismaClient.user.create({
        data: { name: "Leandro Code" },
      });
      return res.status(200).json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error", err });
    }
  }); */
}

export default products;
