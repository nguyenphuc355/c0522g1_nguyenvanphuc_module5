import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerModule} from './customer/customer.module';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => CustomerModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
