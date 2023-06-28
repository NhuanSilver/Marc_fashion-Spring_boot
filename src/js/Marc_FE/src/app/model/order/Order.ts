import {User} from "../user/User";
import {OrderItem} from "./OrderItem";

export interface Order{
  id : number,
  user : User,
  phoneNumber : string,
  address : string,
  username : string,
  note : string,
  orderItems : OrderItem[]
}
