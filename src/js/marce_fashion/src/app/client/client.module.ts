import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {clientRoutes} from "./client.routes";
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { ProductComponent } from './product/product.component';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "../user/login/login.component";
import {RegisterComponent} from "../user/register/register.component";
import {ProductItemComponent} from "./product/product-item/product-item.component";
import { SearchComponent } from './search/search.component';



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
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class ClientModule { }