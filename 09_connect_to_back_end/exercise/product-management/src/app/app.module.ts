import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {RoutingModule} from './routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {DetailProductComponent} from './product/detail-product/detail-product.component';
import {HttpClientModule} from '@angular/common/http';
import {CraeteCategoryComponent} from './category/craete-category/craete-category.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {DeleteCategoryComponent} from './category/delete-category/delete-category.component';
import {UpdateCategoryComponent} from './category/update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    DetailProductComponent,
    CraeteCategoryComponent,
    CategoryListComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
