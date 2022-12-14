import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerModule} from './customer/customer.module';
import {HomeComponent} from './home/home.component';
import {FacilityModule} from './facility/facility.module';
import {ContractModule} from './contract/contract.module';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => CustomerModule},
  {path: 'facility', loadChildren: () => FacilityModule},
  {path: 'contract', loadChildren: () => ContractModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
