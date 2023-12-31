import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Product} from "../model/product/Product";
import {PageProduct} from "../model/product/PageProduct";
import {FilterRequest} from "../model/product/FilterRequest";
import {CreateUpdateRequest} from "../model/product/CreateUpdateRequest";
import {ApiPath} from "../model/Enum/ApiPath";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api_url = environment.api_url + ApiPath.PRODUCT

  colorHandle: Map<string, string> = new Map([
    ['Trắng', 'white'],
    ['Đen', 'black'],
    ['Hồng', 'pink'],
    ['Đỏ', 'red'],
    ['Xanh', 'blue']
  ]);

  constructor(private http: HttpClient) {
  }

  public getALlProduct(page: number): Observable<PageProduct> {
    let params = {page: page}
    return this.http.get<PageProduct>(this.api_url, {params});
  }

  public handleColor(color: string): string {
    let colorHandled = this.colorHandle.get(color);
    if (colorHandled) return colorHandled;
    return '';
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api_url}/${id}`);
  }

  getProductByVariantId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api_url}/variant/${id}`);
  }

  getProductByCategoryId(cateId: number) {
    return this.http.get<PageProduct>(`${this.api_url}/category/${cateId}`)
  }

  createProduct(request: CreateUpdateRequest) {
    return this.http.post<Product>(this.api_url, request);
  }

  deleteProduct(id: number) : Observable<any> {
    return this.http.delete(this.api_url  + "/"+id)
  }

  updateProduct(id: number, request: CreateUpdateRequest):Observable<Product> {
    return this.http.put<Product>(this.api_url +"/" + id,request)
  }
}
