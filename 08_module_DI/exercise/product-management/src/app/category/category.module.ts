import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryListComponent} from './category-list/category-list.component';
import {RoutingModule} from './routing.module';
import {DeleteCategoryComponent} from './delete-category/delete-category.component';
import {CreateCategoryComponent} from './create-category/create-category.component';
import {UpdateCategoryComponent} from './update-category/update-category.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CategoryListComponent,
    DeleteCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
