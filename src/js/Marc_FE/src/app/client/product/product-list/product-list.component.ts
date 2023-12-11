import {Component, Input} from '@angular/core';
import {Product} from "../../../model/product/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  @Input() products !: Product[]
  @Input() display = 'grid-cols-4 grid gap-5'

}
