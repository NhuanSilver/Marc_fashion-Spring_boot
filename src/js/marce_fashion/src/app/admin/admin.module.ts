
import {adminRoutes} from "./admin.routes";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [


    SidebarComponent,
    NavbarComponent,
    AdminProductComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    MatIconModule,

  ]
})
export class AdminModule {
}
