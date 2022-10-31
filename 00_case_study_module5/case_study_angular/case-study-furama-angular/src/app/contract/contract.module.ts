import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateContractComponent} from './create-contract/create-contract.component';
import {ContractListComponent} from './contrat-list/contract-list.component';


@NgModule({
  declarations: [
    CreateContractComponent,
    ContractListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractModule {
}
