import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ProductService} from "../../service/product.service";
import {PageProduct} from "../../model/product/PageProduct";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   page !: Observable<PageProduct>
  constructor(private productService : ProductService) {
  }
  ngOnInit(): void {
    this.getAllProduct();
  }
  private  getAllProduct() : void{
    this.page= this.productService.getALlProduct(1).pipe(
      map((p) => {
        let products = p.products.slice(0,3);
        p.products = products;
        return p;
      })
    );
  }

}
