import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import {v4 as uuidv4} from 'uuid';
import {environment} from "../../../environments/environment.development";
import {UploadService} from "../../service/upload.service";
import {ProductService} from "../../service/product.service";
import {CreateUpdateRequest} from "../../model/product/CreateUpdateRequest";
import { map, Observable} from "rxjs";
import {Category} from "../../model/category/category";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product/Product";
import {Image} from "../../model/product/Image";

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
  sizes: string[] = ['S', 'M', 'L', 'XL'];
  colors: string[] = ['Đỏ', 'Xanh', 'Đen', 'Trắng', 'Hồng']
  isSize: boolean = false;
  isColor: boolean = false;
  isCategory: boolean = false;
  categories$ !: Observable<Category[]>;
  selectedColors: Set<string> = new Set();
  selectedSizes: Set<string> = new Set();
  optionImage: Set<string> = new Set();
  variantOptions: VariantOptions[] = [];
  imagesForColor: Map<string, File[]> = new Map();
  currentCategory : Category = {
    id : 0,
    name : 'Marc Signature',
    imageSrc : ''
  };
  product : Product = {
    id  : 0,
    images : [],
    variants: [],
    name : '',
    price: 0,
    category: this.currentCategory
  };
  sizesControl = new FormControl<string[]>([]);
  colorsControl = new FormControl<string[]>([]);
  @ViewChildren('imageElement') imageElements!: QueryList<ElementRef<HTMLImageElement>>;

  constructor(private uploadService: UploadService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategory().pipe(
      map(categories => {
        if (this.product.id === 0) this.currentCategory = categories[0];
        return categories
      })
    );
    this.activateRoute.params.subscribe(params => {
      let id: number = params['id'];
      if (id) {
        this.productService.getProductById(id).subscribe(p => {
          this.product = p;
          console.log(p)
          this.currentCategory = p.category;
          const defaultSizes = this.sizesControl.value;
          const defaultColors = this.colorsControl.value;
          this.product.variants.map(variant => {
            if (!defaultSizes?.includes(variant.size)) defaultSizes?.push(variant.size);
            if (!defaultColors?.includes(variant.color)) defaultColors?.push(variant.color);
          })
          this.sizesControl.setValue(defaultSizes);
          this.colorsControl.setValue(defaultColors);
          this.generateOptions()
        });
      }
    })
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
    let optionCount = 0;
    this.variantOptions.map((o, index) => {
      if (o === option) this.variantOptions.splice(index, 1);
      if (o.color === option.color) optionCount++;
    })
    if (optionCount < 1) this.imagesForColor.delete(option.color)

    this.generateOptionImage()
  }

  submit(f: NgForm) {
    if (f.valid) {
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
      if (formData.getAll('images').length > 0) {
        this.uploadService.upload(formData).subscribe({
          next: res => {
            let images = res.map(img => environment.api_root + "/" + img)
            if (this.product.id === 0) {
              let request: CreateUpdateRequest = {
                name: f.value.productName,
                price: f.value.productPrice,
                images: images,
                categoryId: this.currentCategory.id,
                variants: this.variantOptions
              }
              this.createNewProduct(request);
            } else {
              let productImage = this.product.images.map(img => img.src);
              images.push(...productImage)
              let request: CreateUpdateRequest = {
                name: f.value.productName,
                price: f.value.productPrice,
                images: images,
                categoryId: this.currentCategory.id,
                variants: this.variantOptions
              }
              this.productService.updateProduct(this.product.id, request).subscribe()
              this.router.navigateByUrl('/admin/products')
            }
          },
          error: err => {
            alert("Lỗi không xác định")
          }
        })
      } else{
        let productImage = this.product.images.map(img => img.src);
        let request: CreateUpdateRequest = {
          name: f.value.productName,
          price: f.value.productPrice,
          images: productImage,
          categoryId: this.currentCategory.id,
          variants: this.variantOptions
        }
        this.productService.updateProduct(this.product.id, request).subscribe( p => console.log(p))
        this.router.navigateByUrl('/admin/products')
      }

    }

  }

  createNewProduct(request: CreateUpdateRequest) {
    this.productService.createProduct(request).subscribe(() => {
      this.router.navigateByUrl('/admin/products')
    })
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

  deleteImage(imgFile: File, color: string) {
    let files: File[] = this.imagesForColor.get(color) || [];
    files.forEach((value, index) => {
      if (value === imgFile) files.splice(index, 1)
    })
  }

  openFileInput(color: string) {
    let inputFile = document.getElementById("inputFile" + color);
    if (inputFile) inputFile.click();
  }

  decodeColor(vnColor: string): string {
    return vnColor.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }
  getProductImagesByColor(color : string) : Image[]{
    let decodeColor = this.decodeColor(color);
    return this.product.images.filter(image => image.src.toLowerCase().includes(decodeColor.toLowerCase()))
  }

  deleteExtImage(id: number) {
    this.product.images.map( (value, index) => {
      if (value.id === id) {
        this.product.images.splice(index, 1);
        return;
      }
    })
  }
}
