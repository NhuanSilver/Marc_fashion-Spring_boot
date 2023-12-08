import {Injectable} from '@angular/core';
import {StorageService} from "./storage.service";
import {environment} from "../../environments/environment.development";
import {Item} from "../model/cart/Item";
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Cart} from "../model/cart/Cart";
import {ApiPath} from "../model/Enum/ApiPath";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  api_url = environment.api_url + ApiPath.CART;
  cart !: Cart;

  private subject = new BehaviorSubject<Cart>(this.cart);
  cart$ = this.subject.asObservable();

  constructor(private storageService: StorageService,
              private http: HttpClient) {
  }

  public addToCart(variantId: number, quantity: number): Observable<Cart> {
    let request = {
      variantId: variantId,
      quantity: quantity
    }
    return this.http.post<Cart>(`${this.api_url}`, request).pipe(
      map((cart: Cart) => {
        this.cart = cart;
        this.notify()
        return cart;
      })
    )
  }

  public getCart(): Observable<Cart> {
    if (!this.storageService.getUser()) {
      this.clearCart();
      return of(this.cart)
    }
    return this.http.get<Cart>(this.api_url + "/user").pipe(
      map(cart => {
        this.cart = cart;
        this.notify();
        return cart;
      })
    );
  }

  plus(itemId: number, quantity: number): Observable<Item> {
    const params = {quantity: quantity}
    return this.http.put<Item>(this.api_url + "/item/" + itemId + "/plus", {}, {params})
      .pipe(
        map(
          item => {
            const existItem = this.cart.items.find(i => i.id === item.id);
            if (existItem) existItem.quantity = item.quantity;
            this.notify();
            return item;
          }
        )
      );

  }

  minus(itemId: number, quantity: number): Observable<Item> {
    const params = {quantity: quantity}
    return this.http.put<Item>(this.api_url + "/item/" + itemId + "/minus", {}, {params}).pipe(
      map(
        item => {
          const existItem = this.cart.items.find(i => i.id === item.id);
          if (existItem) existItem.quantity = item.quantity;
          this.notify();
          return item;
        }
      )
    );
  }

  removeItem(item: Item) {
    return this.http.delete(this.api_url + "/item/" + item.id)
      .pipe(
        map(
          res => {
            this.cart.items.forEach((i, index) => {
              if (i === item) {
                this.cart.items.splice(index, 1);
              }
            })
            this.notify();
            return res;
          }
        )
      );
  }

  notify(): void {
    this.subject.next(this.cart);
  }

  getTotal() {
    if (this.cart) {
      return this.cart.items.reduce((acc, item) => {
        const itemPrice = item.product.price * item.quantity;
        return acc + itemPrice;
      }, 0)
    }
    return 0;
  }

  getTotalItems() {
    if (this.cart) {
      return this.cart.items.length;
    }
    return 0;
  }

  clearCart() {
    this.cart = {
      id: 1,
      items: []
    };
    this.notify();
  }
}
