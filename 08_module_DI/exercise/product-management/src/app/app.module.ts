import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RoutingModule} from './shared/routing.module';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {SharedModule} from './shared/shared.module';
import {ProductModule} from './product/product.module';
import {ProductListComponent} from './product/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
