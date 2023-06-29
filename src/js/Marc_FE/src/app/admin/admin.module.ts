
import {adminRoutes} from "./admin.routes";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import {ClientModule} from "../client/client.module";
import { AddProductComponent } from './add-product/add-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";

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
    ClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,

  ]
})
export class AdminModule {
}
