import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {CreateFacilityListComponent} from './create-facility-list/create-facility-list.component';
import {EditFacilityListComponent} from './edit-facility-list/edit-facility-list.component';


const routes: Routes = [
  {path: '', component: FacilityListComponent},
  {path: 'create', component: CreateFacilityListComponent},
  {path: 'edit/:facilityId', component: EditFacilityListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
