import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Cart} from "../../model/cart/Cart";
import {Item} from "../../model/cart/Item";
import {Order} from "../../model/order/Order";
import {NgForm} from "@angular/forms";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  cart$ !: BehaviorSubject<Cart>;
  order !: Order;
  constructor(private cartService : CartService,
              private orderService : OrderService) {
  }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.cartService.getCart().subscribe();
  }
  getTotal(){
    return this.cartService.getTotal();
  }
  getVariantImg(item : Item) : string{
    const firstVariant = item.product.variants.find(variant => variant.color === item.variant.color);
    if (firstVariant) return  firstVariant.image.src;
    return '';
  }

  getTotalOrder() {
    return  this.order.orderItems.reduce((acc, item) =>{
      return acc + item.product.price * item.quantity
    }, 0)
  }

  onSubmit(f: NgForm) {
    this.orderService.placeOrder(f.value).subscribe(order =>{
      this.order = order;
      let cart : Cart = {
        id  : 1,
        items : []
      }
      this.cart$.next(cart)
    })
  }
}
