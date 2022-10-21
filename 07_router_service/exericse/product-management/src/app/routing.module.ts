import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'edit/:productId', component: EditProductComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule {
}
