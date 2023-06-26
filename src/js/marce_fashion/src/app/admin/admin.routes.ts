import {AdminComponent} from "./admin.component";
import {Routes} from "@angular/router";
import {AdminProductComponent} from "./admin-product/admin-product.component";
export const adminRoutes : Routes = [
  {
    path: 'admin', component: AdminComponent,
    children : [
      {path : '', component : AdminProductComponent},
    ]
  }
]
