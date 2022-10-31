import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from '../customer/customer-list/customer-list.component';
import {RoutingModule} from '../customer/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerTypeListComponent} from './customer-type-list/customer-type-list.component';


@NgModule({
  declarations: [
    CustomerTypeListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerTypeModule {
}
