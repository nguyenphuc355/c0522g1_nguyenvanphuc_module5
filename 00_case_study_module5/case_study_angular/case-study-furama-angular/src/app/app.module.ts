import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {RoutingModule} from './customer/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomerModule} from './customer/customer.module';
import {ContractModule} from './contract/contract.module';
import {FacilityModule} from './facility/facility.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule,
    CustomerModule,
    ContractModule
    , FacilityModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
