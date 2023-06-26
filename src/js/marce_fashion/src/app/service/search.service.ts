import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {PageProduct} from "../model/product/PageProduct";
import {HttpClient} from "@angular/common/http";
import {FilterRequest} from "../model/product/FilterRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiSearch_url =`${environment.api_url}/search`

  constructor(private http : HttpClient) { }

  getProductByName(name: string, page : number) {
    let params = { page : page, name : name}
    return this.http.get<PageProduct>(`${this.apiSearch_url}`, {params});
  }
  getProductByFilter(filterRequest : FilterRequest) : Observable<PageProduct>{
    let params = {
      colors : filterRequest.colors,
      sizes : filterRequest.sizes,
      page:  filterRequest.page,
      type : filterRequest.type
    }
    return this.http.get<PageProduct>(this.apiSearch_url +"/filter", {params});
  }
}
