import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {v4 as uuidv4} from 'uuid';
import {environment} from "../../../environments/environment.development";
import {UploadService} from "../../service/upload.service";
import {ProductService} from "../../service/product.service";
import {CreateUpdateRequest} from "../../model/product/CreateUpdateRequest";
import {from, Observable, of} from "rxjs";
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
export class AddProductComponent implements OnInit {
  isSize: boolean = false;
  isColor: boolean = false;
  isCategory: boolean = false;
  categories$ !: Observable<Category[]>;
  selectedColors: Set<string> = new Set();
  selectedSizes: Set<string> = new Set();
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  colors: string[] = ['Đỏ', 'Xanh', 'Vàng', 'Đen', 'Trắng', 'Hồng']
  optionImage: Set<string> = new Set();
  variantOptions: VariantOptions[] = [];
  imagesForColor: Map<string, File[]> = new Map();
  currentCategory !: Category;
  sizesControl = new FormControl();
  colorsControl = new FormControl();
  @ViewChildren('imageElement') imageElements!: QueryList<ElementRef<HTMLImageElement>>;

  constructor(private uploadService: UploadService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategory();
  }

  generateOptions() {
    this.variantOptions = [];
    this.sizesControl.value?.map((size: any) => {
      this.colorsControl.value?.map((color: any) => {
        const option = {
          size: size,
          color: color
        }
        this.variantOptions.push(option)
      })
    })
    this.generateOptionImage()
  }

  private generateOptionImage() {
    this.optionImage.clear()
    this.variantOptions.map(option => this.optionImage.add(option.color))
  }

  deleteOption(option: VariantOptions) {
    this.variantOptions.map((o, index) => {
      if (o === option) this.variantOptions.splice(index, 1);
    })
    this.generateOptionImage()
  }

  submit(f: NgForm) {
    if (f.valid){
      let formData = new FormData();
      this.imagesForColor.forEach((value, key) => {
        let fileArr = Array.from(value)
        fileArr.map((file, index) => {
          let unicodeColor = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
          let fileExt = file.name.substring(file.name.lastIndexOf('.'));
          let randomId = uuidv4().normalize('NFD').replaceAll('-', '')
          let newFileName = `product_${unicodeColor}_${index}_${randomId + fileExt}`;
          formData.append('images', file, newFileName)
        })
      })
      this.uploadService.upload(formData).subscribe({
        next: res => {
          let images = res.map(img => environment.api_root + "/" + img)
          let request: CreateUpdateRequest = {
            name: f.value.productName,
            price: f.value.productPrice,
            images: images,
            categoryId: this.currentCategory.id,
            variants: this.variantOptions
          }
          this.productService.createProduct(request).subscribe(res => {
            this.router.navigateByUrl('/admin/products')
          })
        },
        error: err => {
          alert("lỗi rầu")
        }
      })
    }

  }

  onFilesSelected(event: any) {
    const images: File[] = Array.from(event.target.files);
    this.imagesForColor.set(event.target.name, images);
    for (const imgFile of images) {
      this.loadImageFile(imgFile);
    }

  }


  loadImageFile(imgFile: File) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (e.target) {
        let result = e.target.result;
        this.imageElements.forEach((imageElement: ElementRef<HTMLImageElement>) => {
          if (imageElement.nativeElement.id === imgFile.name) {
            if (typeof result === "string") {
              imageElement.nativeElement.src = result;
            }
          }
        });

      }
    }
    fileReader.readAsDataURL(imgFile);
  }

  deleteImage(imgFile: File, color : string) {
    let files :  File[] = this.imagesForColor.get(color) || [];
    files.forEach( (value, index) => {
      if (value === imgFile) files.splice(index, 1)
    })
  }

  openFileInput(color: string) {
    let inputFile = document.getElementById("inputFile" + color);
    if (inputFile) inputFile.click();
  }
}
