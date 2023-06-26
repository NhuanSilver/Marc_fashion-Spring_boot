import {Product} from "./Product";

export interface PageProduct{
  totalPages: number,
  totalElements : number,
  products : Product[]
}
