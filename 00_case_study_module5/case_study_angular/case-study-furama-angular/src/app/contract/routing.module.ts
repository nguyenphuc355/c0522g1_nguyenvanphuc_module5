import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContractListComponent} from './contrat-list/contract-list.component';
import {CreateContractComponent} from './create-contract/create-contract.component';


const routes: Routes = [
  {path: '', component: ContractListComponent},
  {path: 'create', component: CreateContractComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
