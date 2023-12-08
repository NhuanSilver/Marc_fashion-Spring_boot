import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../service/product.service";
import {map, Observable} from "rxjs";
import {Product} from "../../../model/product/Product";
import {ProductVariant} from "../../../model/product/ProductVariant";
import {CartService} from "../../../service/cart.service";
import {StorageService} from "../../../service/storage.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$ !: Observable<Product>;
  product !: Product;
  quantity = 1;
  currentVariant !: ProductVariant;
  variantImages : string[] = []
  colors: Set<string> = new Set<string>();
  sizes: Set<string> = new Set<string>();
  imageLarge = '';

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService : CartService,
              private storageService : StorageService,
              private toast: ToastrService,
              private router : Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.product$ = this.productService.getProductById(id).pipe(
        map((product) => {
          this.currentVariant = product.variants[0]
          this.product = product
          this.getColorAndSize(product)
          this.getVariantsImage()
          return product
        }));
    })
  }


  getColorAndSize(product : Product){
    product.variants.map((variant) => {
      this.colors.add(variant.color)
      if (this.currentVariant.color == variant.color) this.sizes.add(variant.size)
    })
  }
  getVariantsImage(): void {
    let unicodeColor = this.currentVariant.color
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    this.variantImages = [];
    this.product.images.map((image) => {
      if (image.src.toLowerCase().includes(unicodeColor.toLowerCase())) {
        this.variantImages.push(image.src);
      }
    })
    this.imageLarge = this.variantImages[0];
  }
  colorChanged(color: string) {
    this.sizes.clear()
    let variant = this.product.variants.find(variant => variant.color == color);
    if (variant) this.currentVariant = variant;
    this.getColorAndSize(this.product);
    this.getVariantsImage();
  }

  sizeChanged(size: string) {
    let variant = this.product.variants.find(variant => variant.size == size && this.currentVariant.color == variant.color);
    if (variant) this.currentVariant = variant;
  }

  handleColor(color: string) {
    return this.productService.handleColor(color);
  }
  public addToCart(variantId : number, quantity: number){
    if (this.storageService.getUser() == null) {
      this.router.navigate(['/dang-nhap'])
    }
    this.cartService.addToCart(variantId, quantity).subscribe(cart => {
      const variant = cart.items.find(item => item.variant.id === variantId);
      const product = variant?.product;
      this.toast.success(`Đã thêm x${quantity} ${product?.name} vào giỏ hàng`)
    });
  }

  quantityChanged(quantity: number) {
    this.quantity += quantity;
  }
}
