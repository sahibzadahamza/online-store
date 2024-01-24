export interface product{
  _id:string;
  title:string;
  size:string
  weight:string
  brandName:string,
  dimentions:string,
  ingredients:string,
  price:string,
  volume:string,
  description:string,
  discount:string,
  categoryId:string;
  product_Pic:[string]
}
export class productClass{
  _id?:string;
  title!: string;
  size!:string
  weight!:string
  brandName!:string
  dimentions!:string
  ingredients!:string
  price!:string
  volume!:string
  description!:string
  categoryId!:string
  discount!:string
  product_Pic!:[string]                                             
}
