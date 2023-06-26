import {ProductVariant} from "../product/ProductVariant";
import {Product} from "../product/Product";

export interface Item{
  id : number,
  variant : ProductVariant,
  product : Product
  quantity : number
}
