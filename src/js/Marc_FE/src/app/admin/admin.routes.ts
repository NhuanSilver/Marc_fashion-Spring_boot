import {AdminComponent} from "./admin.component";
import {Routes} from "@angular/router";
import {AdminProductComponent} from "./admin-product/admin-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {CanActiveGuard} from "./can-active.guard";
export const adminRoutes : Routes = [
  {
    path: 'admin', component: AdminComponent,
    children : [
      {path : '', component : AdminProductComponent},
      {path : 'products', component : AdminProductComponent},
      {path : 'products/add', component : EditProductComponent},
      {path : 'products/update/:id', component : EditProductComponent}
    ],
    canActivate : [CanActiveGuard]
  }
]
