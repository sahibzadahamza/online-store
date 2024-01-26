import { product } from "./product";

export interface Order{
    customerDetails:string,
    cartItems:product,
    subTotal:number,
    shippingPrice:number,
    Total:number
}