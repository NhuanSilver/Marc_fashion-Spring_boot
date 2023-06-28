import {AdminComponent} from "./admin.component";
import {Routes} from "@angular/router";
import {AdminProductComponent} from "./admin-product/admin-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
export const adminRoutes : Routes = [
  {
    path: 'admin', component: AdminComponent,
    children : [
      {path : '', component : AdminProductComponent},
      {path : 'products', component : AdminProductComponent},
      {path : 'products/add', component : AddProductComponent}
    ]
  }
]
