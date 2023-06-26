import {SortType} from "./SortType";

export interface FilterRequest{
  colors : string[],
  sizes : string[],
  page : number,
  type : SortType
}
