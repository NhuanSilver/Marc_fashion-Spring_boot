import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {FormsModule} from "@angular/forms";
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {AuthInterceptor, authInterceptorProviders} from "./service/auth.interceptor";
import {ToastrModule} from "ngx-toastr";
registerLocaleData(localeDe, 'vi-VN',localeDeExtra)

@NgModule({
    declarations: [
        AppComponent,
        ClientComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterOutlet,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ClientModule,
        AdminModule,
        ToastrModule.forRoot()
    ],
    providers: [
        authInterceptorProviders,
        AuthInterceptor,
        {
            provide: LOCALE_ID,
            useValue: 'vi-VN'
        },
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
