import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./client/checkout/checkout.component";


@NgModule({
  imports: [RouterModule.forRoot([],{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
