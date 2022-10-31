import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {CreateFacilityListComponent} from './create-facility-list/create-facility-list.component';
import {EditFacilityListComponent} from './edit-facility-list/edit-facility-list.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateFacilityListComponent,
    EditFacilityListComponent,
    FacilityListComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule
  ]
})
export class FacilityModule {
}
