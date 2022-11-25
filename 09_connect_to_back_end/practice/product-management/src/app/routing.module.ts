import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {DetailProductComponent} from './product/detail-product/detail-product.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: CreateProductComponent},
  {path: 'edit/:productId', component: EditProductComponent},
  {path: 'delete/:productId', component: DeleteProductComponent},
  {path: 'detail/:productId', component: DetailProductComponent}
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
