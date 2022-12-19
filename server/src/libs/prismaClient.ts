import { PrismaClient } from "@prisma/client";
/* import * as dotenv from "dotenv";
dotenv.config({
  path: `.env.development`
});

console.log(process.env.DATABASE_URL) */

console.log(`process.env.DATABASE_URL`);
console.log(process.env.DATABASE_URL);

const prismaClient = new PrismaClient();

export default prismaClient;
