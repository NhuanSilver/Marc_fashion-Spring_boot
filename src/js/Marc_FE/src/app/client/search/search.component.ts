import {Component, ElementRef, OnInit,  ViewChild} from '@angular/core';
import {debounceTime, fromEvent, map, Observable} from "rxjs";
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
  @ViewChild('search', {static : true}) search !: ElementRef;
  pageProduct$!: Observable<PageProduct>;
  currentPage: number = 1;
  totalPages: number = 1;
  name = '';

  constructor(private productService : ProductService,
              private searchService : SearchService,
              private activateRoute : ActivatedRoute
  ) {
  }
  doSearch(){
    this.pageProduct$ = this.searchService.getProductByName(this.name, 1).pipe(
      map( pageProduct =>{
        this.totalPages = pageProduct.totalPages
        return pageProduct;
      })
    );
  }
  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'keydown').pipe(
      debounceTime(300),
    ).subscribe( (input : any) => {
      this.name = input.target.value;
      this.doSearch()
    })
  }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(params =>{
      this.name = params['name'] || '';
      this.doSearch()
    })
  }


  currentPageChanged(page : number) {
    this.currentPage = page;
    this.doSearch()
  }
}
