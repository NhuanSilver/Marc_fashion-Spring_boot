import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category/category";
import {Observable} from "rxjs";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  categories$ !: Observable<Category[]>;
  constructor(private categoryService : CategoryService) {
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategory();
  }

}
