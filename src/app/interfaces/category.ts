


export interface Category {
  _id?: string;
    level?:number
    cols?:number,
    rows?:number,
    name?: string;
    parent?  : string;
    extraData?: any
    displayManagerName?: string;
    order?: number;
    active?: boolean;
    hasPicture?: string;
    displayManagerId?: string;
    parentId?: string
    lampixIcon?: string
    translations?: any
    productTilesNo?: number
    showPictures?: boolean
    category_pic?:string
}

export class CategoryClass {
  _id?: string;
  level?: number;
  cols?: number;
  rows?: number;
  name?: string;
  parent?: string;
  extraData?: any
  displayManagerName?: string;
  order?: number;
  active?: boolean;
  hasPicture?: string;
  displayManagerId?: string;
  parentId?: string
  lampixIcon?: string
  translations?: any
  productTilesNo?: number
  showPictures?: boolean
  category_pic?:string
}
export interface parentCategory{
  _id?:string;
  name?:string;
  parent_pic?:string
}
export class parentCategoryClass{
  _id?:string;
  name?:string;
  parent_pic?:string;
}