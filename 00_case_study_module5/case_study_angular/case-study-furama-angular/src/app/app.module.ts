import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { EditFacilityListComponent } from './edit-facility-list/edit-facility-list.component';
import { CreateFacilityListComponent } from './create-facility-list/create-facility-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

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
