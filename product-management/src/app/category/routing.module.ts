import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category-list/category-list.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {DeleteCategoryComponent} from './delete-category/delete-category.component';
import {UpdateCategoryComponent} from './update-category/update-category.component';


const routes: Routes = [
  {path: 'list', component: CategoryListComponent},
  {path: 'create', component: CreateCategoryComponent},
  {path: 'delete/:categoryId', component: DeleteCategoryComponent},
  {path: 'edit/:categoryId', component: UpdateCategoryComponent},
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
