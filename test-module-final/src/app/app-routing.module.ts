import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookSavingsModule} from './book-savings/book-savings.module';


const routes: Routes = [
  {path: '', loadChildren: () => BookSavingsModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
