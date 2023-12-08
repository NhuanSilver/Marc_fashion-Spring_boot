import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order/Order";
import {ApiPath} from "../model/Enum/ApiPath";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api_url = environment.api_url + ApiPath.ORDER
  constructor(private http : HttpClient) { }
  public placeOrder(request : any){
    return this.http.post<Order>(this.api_url, request);
  }
}
