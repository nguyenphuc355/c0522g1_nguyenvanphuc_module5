import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductPageComponent} from "./product-page/product-page.component";
import {StockStatusComponent} from "./stock-status/stock-status.component";
import {FormsModule} from "@angular/forms";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  declarations: [
    ProductPageComponent,
    StockStatusComponent
  ],
  exports: [RouterModule, ProductPageComponent, StockStatusComponent]
})
export class AppRoutingModule { }
