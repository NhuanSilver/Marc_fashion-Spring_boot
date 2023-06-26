import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {Item} from "../../../model/cart/Item";
import {Product} from "../../../model/product/Product";
import {ProductService} from "../../../service/product.service";
import {map, Observable} from "rxjs";
import {ProductVariant} from "../../../model/product/ProductVariant";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{
  @Input() item !: Item;
  imgUrl  ='';
  constructor(private productService : ProductService,
              private cartService : CartService) {
  }

  ngOnInit(): void {
      const firstVariant = this.item.product.variants.find(variant => variant.color === this.item.variant.color);
      if (firstVariant) this.imgUrl = firstVariant.image.src;

  }
  removeItem(){
   this.cartService.removeItem(this.item).subscribe();
  }
  plus(quantity: number){
    this.cartService.plus(this.item.id, quantity).subscribe(value =>{
      console.log(this.item.quantity)
    });
  }
  minus(quantity: number){
    this.cartService.minus(this.item.id, quantity).subscribe();
  }

}
