import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {clientRoutes} from "./client.routes";
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './product/product.component';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductItemComponent} from "./product/product-item/product-item.component";
import { SearchComponent } from './search/search.component';
import {PaginationComponent} from "./pagination/pagination.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductItemComponent,
    ProductComponent,
    ProductListComponent,
    CategoryListComponent,
    SearchComponent,
    PaginationComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    FormsModule,

  ]
})
export class ClientModule { }
