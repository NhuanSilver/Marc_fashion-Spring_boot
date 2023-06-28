import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {ProductService} from "../../service/product.service";
import {PageProduct} from "../../model/product/PageProduct";
import {SortType} from "../../model/product/SortType";
import {FilterRequest} from "../../model/product/FilterRequest";
import {SearchService} from "../../service/search.service";
import {KeyValue} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../model/category/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  pageProduct !: Observable<PageProduct>;
  totalPages : number = 0;
  selectedCategoryIds : string[] = [];
  currentPage : number = 1;
  categoryId : string = '';
  category$ !: Observable<Category>;
  categories$ !: Observable<Category[]>;
  isFilterBar: boolean = false;
  colors = this.productService.colorHandle;
  selectedColors = new Set<string>;
  selectedSizes = new Set<string>;
  sortingTypes = new Map<SortType, string>(
    [
      [SortType.DEFAULT, 'Mặc định'],
      [SortType.NAME_ASC, 'Từ A - Z'],
      [SortType.NAME_DESC, 'Từ Z - A'],
      [SortType.PRICE_ASC, 'Giá tăng dần'],
      [SortType.PRICE_DESC, 'Giá giảm dần'],
    ]
  )
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  currentType = SortType.DEFAULT

  constructor(private productService: ProductService,
              private searchService : SearchService,
              private activateRoute : ActivatedRoute,
              private categoryService : CategoryService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategory();
    this.activateRoute.paramMap.subscribe( params =>{
      this.categoryId = params.get('id') || '';
      if (this.categoryId.length > 0) this.category$ = this.categoryService.getCategoryById(this.categoryId);
      this.selectedCategoryIds = []
      this.selectedCategoryIds.push(this.categoryId)
      this.getProductByFilter();
    })
  }
  getProductByFilter(){
    let request : FilterRequest = {
      colors : Array.from(this.selectedColors),
      sizes : Array.from(this.selectedSizes),
      page : this.currentPage,
      cateIds : this.selectedCategoryIds,
      type : this.currentType
    }
    this.pageProduct = this.searchService.getProductByFilter(request).pipe(
      map(
        pageProduct =>{
          this.totalPages = pageProduct.totalPages;
          return pageProduct;
        }
      )
    )
  }

  checkColorCheckBox(event: any) {
    if (event.target.checked) {
      this.selectedColors.add(event.target.value)
      this.getProductByFilter()
    } else {
      this.selectedColors.delete(event.target.value)
      this.getProductByFilter()
    }
  }

  checkSizeCheckBox(event: any) {
    if (event.target.checked) {
      this.selectedSizes.add(event.target.value)
      this.getProductByFilter()
    } else {
      this.selectedSizes.delete(event.target.value)
      this.getProductByFilter()
    }
  }

  sortChanged(type: SortType) {
    this.currentType = type;
    this.getProductByFilter()

  }
  currentPageChanged(page : number){
    this.currentPage = page;
    this.getProductByFilter();
  }
}
