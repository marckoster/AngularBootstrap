import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule, ModalModule, TooltipModule} from "ngx-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProductComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
