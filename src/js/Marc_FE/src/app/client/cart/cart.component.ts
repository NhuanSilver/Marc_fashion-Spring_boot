import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Item} from "../../model/cart/Item";
import {CartService} from "../../service/cart.service";
import {Cart} from "../../model/cart/Cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$ !: Observable<Cart>
  constructor(private cartService : CartService) {
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.cartService.getCart().subscribe();
  }
  getTotal(){
    return this.cartService.getTotal();
  }
  getTotalItems(){
    return this.cartService.getTotalItems()
  }
}
