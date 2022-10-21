import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { EditFacilityListComponent } from './facility/edit-facility-list/edit-facility-list.component';
import { CreateFacilityListComponent } from './facility/create-facility-list/create-facility-list.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ContratListComponent } from './contract/contrat-list/contrat-list.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FacilityListComponent,
    EditFacilityListComponent,
    CreateFacilityListComponent,
    CustomerListComponent,
    EditCustomerComponent,
    CreateCustomerComponent,
    ContratListComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
