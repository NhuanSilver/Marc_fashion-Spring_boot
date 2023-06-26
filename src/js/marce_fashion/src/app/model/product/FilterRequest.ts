import {SortType} from "./SortType";

export interface FilterRequest{
  cateIds : string[];
  colors : string[],
  sizes : string[],
  page : number,
  type : SortType
}
