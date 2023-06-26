import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Category} from "../model/category/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.api_url + "/categories"
  constructor(private http : HttpClient) { }
  public getAllCategory() : Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }
}
