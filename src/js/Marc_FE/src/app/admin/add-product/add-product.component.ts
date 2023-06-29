import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';
import {environment} from "../../../environments/environment.development";
import {UploadService} from "../../service/upload.service";
import {ProductService} from "../../service/product.service";
import {CreateUpdateRequest} from "../../model/product/CreateUpdateRequest";
import {Observable} from "rxjs";
import {Category} from "../../model/category/category";
import {CategoryService} from "../../service/category.service";
import {Router} from "@angular/router";

interface VariantOptions {
  color: string,
  size: string,
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  isSize: boolean = false;
  isColor: boolean = false;
  isCategory: boolean = false;
  categories$ !: Observable<Category[]>;
  selectedColors: Set<string> = new Set();
  selectedSizes: Set<string> = new Set();
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  colors: string[] = ['Đỏ', 'Xanh', 'Vàng', 'Đen', 'Trắng', 'Hồng']
  optionImage : Set<string> = new Set();
  variantOptions: VariantOptions[] = [];
  imagesForColor : Map<string, File[]> = new Map();
  currentCategory !: Category;
  sizesControl = new FormControl();
  colorsControl = new FormControl();
  constructor(private uploadService : UploadService,
              private productService : ProductService,
              private categoryService : CategoryService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategory();
  }
   generateOptions() {
    this.variantOptions = [];
    this.sizesControl.value?.map( (size : any) =>{
      this.colorsControl.value?.map( (color : any) =>{
        const option = {
          size: size,
          color: color
        }
        this.variantOptions.push(option)
      })
    })
    this.generateOptionImage()
  }
  private generateOptionImage(){
    this.optionImage.clear()
    this.variantOptions.map(option => this.optionImage.add(option.color))
  }

  deleteOption(option: VariantOptions) {
    this.variantOptions.map((o, index) =>{
      if (o === option) this.variantOptions.splice(index, 1);
    })
    this.generateOptionImage()
  }

  submit(f: NgForm) {
    let formData = new FormData();
    this.imagesForColor.forEach( (value, key) =>{
     let fileArr = Array.from(value)
     fileArr.map( (file, index) =>{
       let unicodeColor = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
       let fileExt = file.name.substring(file.name.lastIndexOf('.'));
       let randomId = uuidv4().normalize('NFD').replaceAll('-','')
       let newFileName = `product_${unicodeColor}_${index}_${randomId + fileExt}`;
       formData.append('images',file, newFileName )
     })
    })
    this.uploadService.upload(formData).subscribe({
      next : res =>{
          let images = res.map( img => environment.api_root + "/" + img)
          let request : CreateUpdateRequest = {
            name : f.value.productName,
            price : f.value.productPrice,
            images : images,
            categoryId : this.currentCategory.id,
            variants : this.variantOptions
          }
          this.productService.createProduct(request).subscribe(res =>{
            this.router.navigateByUrl('/admin/products')
          })
      },
      error: err => {
        alert("lỗi rầu")
      }
    })

  }

  onFilesSelected(event: any) {
    this.imagesForColor.set(event.target.name, event.target.files)
  }

}
