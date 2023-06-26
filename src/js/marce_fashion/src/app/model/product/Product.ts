import {Image} from "./Image";
import {ProductVariant} from "./ProductVariant";

export interface Product{
  id : number,
  name : string,
  price: number,
  images : Image[],
  variants : ProductVariant[],
}
