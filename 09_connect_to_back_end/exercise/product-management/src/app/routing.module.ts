import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {DetailProductComponent} from './product/detail-product/detail-product.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {CraeteCategoryComponent} from './category/craete-category/craete-category.component';
import {UpdateCategoryComponent} from './category/update-category/update-category.component';
import {DeleteCategoryComponent} from './category/delete-category/delete-category.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/create', component: CreateProductComponent},
  {path: 'product/edit/:productId', component: EditProductComponent},
  {path: 'product/delete/:productId', component: DeleteProductComponent},
  {path: 'detail/:productId', component: DetailProductComponent},
  {path: 'category', component: CategoryListComponent},
  {path: 'category/create', component: CraeteCategoryComponent},
  {path: 'category/edit/:categoryId', component: UpdateCategoryComponent},
  {path: 'category/delete/:categoryId', component: DeleteCategoryComponent},
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
