import {Image} from "./Image";
import {ProductVariant} from "./ProductVariant";
import {Category} from "../category/category";

export interface Product{
  id : number,
  category : Category
  name : string,
  price: number,
  images : Image[],
  variants : ProductVariant[],
}
