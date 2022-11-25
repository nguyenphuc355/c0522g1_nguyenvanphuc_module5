import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product/product-list/product-list.component';


const routes: Routes = [
  {path: '', component: ProductListComponent
  },
  {
    path: 'category', loadChildren: () => CategoryModule
  },
  {
    path: 'product', loadChildren: () => ProductModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
