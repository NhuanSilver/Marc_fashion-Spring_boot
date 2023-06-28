import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ProductService} from "../../service/product.service";
import {PageProduct} from "../../model/product/PageProduct";
import {Category} from "../../model/category/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  signature !: Observable<PageProduct>;
  bikini !: Observable<PageProduct>;
  aothun !: Observable<PageProduct>;
  categories$ !: Observable<Category[]>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategory();
    this.getProduct();

  }

  private getProduct(): void {
    this.signature = this.productService.getProductByCategoryId(1).pipe(
      map((p) => {
        let products = p.products.slice(0, 4);
        p.products = products;
        return p;
      })
    );
    this.bikini = this.productService.getProductByCategoryId(2).pipe(
      map((p) => {
        let products = p.products.slice(0, 4);
        p.products = products;
        return p;
      })
    );
    this.aothun = this.productService.getProductByCategoryId(4).pipe(
      map((p) => {
        let products = p.products.slice(0, 4);
        p.products = products;
        return p;
      })
    );
  }

}
