import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Product} from "../model/product/Product";
import {PageProduct} from "../model/product/PageProduct";
import {FilterRequest} from "../model/product/FilterRequest";
import {CreateUpdateRequest} from "../model/product/CreateUpdateRequest";

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
    let productRequest = {
      name: request.name,
      price: request.price,
      categoryId: request.categoryId,
      variants: request.variants,
      images: request.images,
    }
    return this.http.post<Product>(this.api_url, productRequest);
  }

  deleteProduct(id: number) : Observable<any> {
    return this.http.delete(this.api_url  + "/"+id)
  }
}
