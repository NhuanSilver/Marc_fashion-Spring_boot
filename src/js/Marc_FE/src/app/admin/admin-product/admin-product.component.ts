import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {PageProduct} from "../../model/product/PageProduct";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit{
  pageProduct$ !: Observable<PageProduct>;
  currentPage : number = 1;
  totalPages : number = 1;
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.getProduct();
  }
  currentPageChanged(page : number){
    this.currentPage = page;
    this.getProduct()
  }

  private getProduct() {
    this.pageProduct$ = this.productService.getALlProduct(this.currentPage).pipe(
      map(
        page =>{
          this.totalPages = page.totalPages;
          console.log(page)
          return page
        }
      )
    );
  }
}
