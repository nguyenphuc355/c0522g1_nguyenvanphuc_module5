import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {RoutingModule} from './routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    CustomerListComponent,
    EditCustomerComponent
  ],
  exports: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbPaginationModule
  ]
})
export class CustomerModule {
}
