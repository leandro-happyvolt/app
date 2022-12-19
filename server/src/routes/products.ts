// * TYPES AND INTERFACES
import { Request, Response, Express } from "express";

// * DEPENDENCIES
import express from "express";

function products(app: Express) {
    const router = express.Router();
    // * PREFIX OF THIS ENDPOINTS
    app.use("/api/products", router);

    router.get(
        "/",
        async (req: Request, res: Response) => {
            return res.status(200).json([{name: 'casa', price: '20000', envMode: process.env.ENV_MODE}]);
        }
    );

}

export default products;