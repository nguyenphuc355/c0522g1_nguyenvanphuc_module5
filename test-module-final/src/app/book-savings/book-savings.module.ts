import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSavingsRoutingModule } from './book-savings-routing.module';
import {TestComponent} from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ],
  imports: [
    CommonModule,
    BookSavingsRoutingModule
  ]
})
export class BookSavingsModule { }
