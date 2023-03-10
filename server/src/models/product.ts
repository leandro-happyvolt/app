import { ObjectId } from "mongodb";

export class Product {
  constructor(
    public name: string,
    public price: number,
    public category: string,
    public id?: ObjectId
  ) {}
}
