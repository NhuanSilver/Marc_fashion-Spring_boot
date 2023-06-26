import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product/Product";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() product !: Product
  variants : Set<string> = new Set<string>();
  constructor(public productService : ProductService) {
  }

  ngOnInit(): void {
    this.product.variants.map(variant => this.variants.add(this.productService.colorHandle.get(variant.color) || ''))
  }
}
