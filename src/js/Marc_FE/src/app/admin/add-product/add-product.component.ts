import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';
import {environment} from "../../../environments/environment.development";
import {UploadService} from "../../service/upload.service";
import {ProductService} from "../../service/product.service";
import {CreateUpdateRequest} from "../../model/product/CreateUpdateRequest";

interface VariantOptions {
  color: string,
  size: string,
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  isSize: boolean = false;
  isColor: boolean = false;
  selectedColors: Set<string> = new Set();
  selectedSizes: Set<string> = new Set();
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  colors: string[] = ['Đỏ', 'Xanh', 'Vàng', 'Đen', 'Trắng']
  optionImage : Set<string> = new Set();
  variantOptions: VariantOptions[] = [];
  imagesForColor : Map<string, File[]> = new Map();
  constructor(private uploadService : UploadService,
              private productService : ProductService) {
  }

  sizeChanged(size: string) {
    let isExist = this.selectedSizes.has(size)
    if (isExist) {
      this.selectedSizes.delete(size)
    } else {
      this.selectedSizes.add(size)
    }
    this.generateOptions();
  }

  colorChanged(color: string) {
    let isExist = this.selectedColors.has(color)
    if (isExist) {
      this.selectedColors.delete(color)
    } else {
      this.selectedColors.add(color)
    }
    this.generateOptions();
  }

  private generateOptions() {
    this.variantOptions = [];
    let sizeArr = Array.from(this.selectedSizes);
    let colorArr = Array.from(this.selectedColors);
    sizeArr.map( size =>{
      colorArr.map( color =>{
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
            categoryId : 2,
            variants : this.variantOptions
          }
          this.productService.createProduct(request).subscribe(console.log)
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
