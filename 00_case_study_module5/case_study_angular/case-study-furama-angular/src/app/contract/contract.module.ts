import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractListComponent} from './contrat-list/contract-list.component';
import {RoutingModule} from './routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CreateContractComponent} from './create-contract/create-contract.component';



@NgModule({
  declarations: [
    CreateContractComponent,
    ContractListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ContractModule {
}
