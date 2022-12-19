// Default exports need to be imported with the corresponding default import syntax. The simplest version directly imports the default:
// import mongodb from "mongodb";
// Esto quiere decir que solo va a importar el mongodb y nada mas, no el MongoClient ni sus otros exports

// import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
// mongodb into the current scope, containing all the exports from the module located at "mongodb"

// Entonces, para usar mongodb.MongoClient, necesito hacer uso del Namespace import syntax
import * as mongodb from "mongodb";
import { MONGO_CONN_STRING, MONGO_DB_NAME } from ".";
import { Product } from "../models/product";

export const collections: { product: mongodb.Collection<Product>  } = { products: '' } as any;

// Initialize Connection
export async function connectToDatabase() {
  const client: mongodb.MongoClient = new mongodb.MongoClient(MONGO_CONN_STRING);
  await client.connect();
  const db: mongodb.Db = client.db(MONGO_DB_NAME);

  // without <IGame> => gamesCollection: mongodb.Collection
  const productsCollection = db.collection<Product>('products');
  collections.product = productsCollection;
}
