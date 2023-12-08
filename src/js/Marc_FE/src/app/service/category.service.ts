import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Category} from "../model/category/category";
import {ApiPath} from "../model/Enum/ApiPath";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.api_url + ApiPath.CATEGORY
  constructor(private http : HttpClient) { }
  public getAllCategory() : Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }

  getCategoryById(categoryId: string) : Observable<Category> {
    return this.http.get<Category>(this.apiUrl+"/"+categoryId);
  }
}
