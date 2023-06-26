import {ClientComponent} from "./client.component";
import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "../user/register/register.component";
import {LoginComponent} from "../user/login/login.component";
import {ProductDetailsComponent} from "./product/product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ProductComponent} from "./product/product.component";
import {SearchComponent} from "./search/search.component";

export const clientRoutes : Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {path: '', component: HomeComponent},
      // {path: 'cart', component: CartComponent},
      // {path: 'thanh-toan', component: CheckoutComponent, canActivate : [CanActiveGuard]},
      {path: 'dang-nhap', component: LoginComponent},
      {path: 'dang-ky', component: RegisterComponent},
      {path: 'san-pham/:id', component: ProductDetailsComponent},
      {path: 'gio-hang', component: CartComponent},
      {path: 'dat-hang', component: CheckoutComponent},
      {path: 'tong-san-pham/:id', component: ProductComponent},
      {path: 'tong-san-pham', component: ProductComponent},
      {path: 'tim-kiem', component : SearchComponent}
    ]
  }
]
