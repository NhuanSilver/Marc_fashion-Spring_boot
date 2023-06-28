import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  colorOptions: string[] = ['Đỏ', 'Trắng', 'Xanh', 'Vàng', 'Hồng'];
  myControl = new FormControl();

}
