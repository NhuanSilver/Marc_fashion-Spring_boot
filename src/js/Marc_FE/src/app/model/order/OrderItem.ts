import {Product} from "../product/Product";
import {ProductVariant} from "../product/ProductVariant";

export interface OrderItem{
  id : number,
  product : Product,
  variant : ProductVariant,
  quantity : number
}
