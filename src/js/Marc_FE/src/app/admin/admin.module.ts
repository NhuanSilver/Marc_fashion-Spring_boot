
import {adminRoutes} from "./admin.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import {ClientModule} from "../client/client.module";
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [


    SidebarComponent,
    NavbarComponent,
    AdminProductComponent,
    AddProductComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ClientModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule {
}
