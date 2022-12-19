// import "dotenv/config";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.ENV_MODE}`
}); 

if (
  !process.env.REST_API ||
  !process.env.JWT_SECRET ||
  !process.env.SESSION_COOKIE_NAME ||
  !process.env.DATABASE_URL || 
  !process.env.MONGO_CONN_STRING || 
  !process.env.DB_NAME  
) {
  throw new Error("Missing environment variables");
}

export const REST_API = process.env.REST_API;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME;
export const DATABASE_URL = process.env.DATABASE_URL;
export const MONGO_CONN_STRING = process.env.MONGO_CONN_STRING;
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

console.log(REST_API);
console.log(JWT_SECRET);
console.log(SESSION_COOKIE_NAME);
console.log(DATABASE_URL);
console.log(MONGO_CONN_STRING);
console.log(MONGO_DB_NAME);

