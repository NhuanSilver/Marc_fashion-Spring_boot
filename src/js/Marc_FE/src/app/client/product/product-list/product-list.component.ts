import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../model/product/Product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  @Input() products !: Product[]
  @Input() display = 'grid-cols-4 grid gap-5'

}
