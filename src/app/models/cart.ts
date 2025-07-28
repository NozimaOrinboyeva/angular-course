import { Product } from "../24-dars/product/product";

export interface Cart {
    id: string;
    product: Product;
    quantity: number;
}
