import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from './product-update/product-update.component';


const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'detail/:productId', component: ProductDetailComponent},
  {path: 'edit/:productId', component: ProductUpdateComponent},
  {path: 'create', component: ProductCreateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {
}
