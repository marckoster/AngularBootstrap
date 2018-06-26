import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
