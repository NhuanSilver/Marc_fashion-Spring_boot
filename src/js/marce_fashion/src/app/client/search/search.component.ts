import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../model/product/Product";
import {debounceTime, delay, map, Observable} from "rxjs";
import {ProductService} from "../../service/product.service";
import {PageProduct} from "../../model/product/PageProduct";
import {SearchService} from "../../service/search.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  pageProduct$!: Observable<PageProduct>;
  currentPage: number = 1;
  totalPages: number = 1;
  name = '';

  constructor(private productService : ProductService,
              private searchService : SearchService,
              private activateRoute : ActivatedRoute
  ) {
  }
  doSearch(name : string){
    this.pageProduct$ = this.searchService.getProductByName(name, 1).pipe(
      delay(200),
      map( pageProduct =>{
        this.totalPages = pageProduct.totalPages
        return pageProduct;
      })
    );
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params =>{
      this.name = params['name'] || '';
      this.doSearch(this.name)
    })
  }


  currentPageChanged(page : number) {
    this.currentPage = page;
    this.doSearch(this.name)
  }
}
