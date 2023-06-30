import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Order} from "../model/order/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api_url = environment.api_url + "/auth/orders"
  constructor(private http : HttpClient) { }
  public placeOrder(request : any){
    return this.http.post<Order>(this.api_url, request);
  }
}
