import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Product} from "../model/product/Product";
import {PageProduct} from "../model/product/PageProduct";
import {FilterRequest} from "../model/product/FilterRequest";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url = `${environment.api_url}/products`;
  colorHandle: Map<string, string> = new Map([
    ['Trắng', 'white'],
    ['Đen', 'black'],
    ['Hồng', 'pink'],
    ['Đỏ', 'red'],
    ['Xanh', 'blue']
  ]);
  constructor(private http : HttpClient) { }
  public getALlProduct(page : number): Observable<PageProduct>{
    let params = {page : page}
    return this.http.get<PageProduct>(this.api_url, {params});
  }
  public handleColor(color : string) : string {
    let colorHandled = this.colorHandle.get(color);
    if (colorHandled) return colorHandled;
    return '';
  }
  public getProductById( id : number): Observable<Product>{
    return this.http.get<Product>(`${this.api_url}/${id}`);
  }

  getProductByVariantId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api_url}/variant/${id}`);
  }

}
