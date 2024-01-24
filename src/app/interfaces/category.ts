export interface category{
  categoryName:string;
  _id?:string;
  isActive:string;
  category_Pic:File;
}
export class categoryClass{
  categoryName!: string;
  _id?:string;
  isActive!:string;
  category_Pic!:File;
}   