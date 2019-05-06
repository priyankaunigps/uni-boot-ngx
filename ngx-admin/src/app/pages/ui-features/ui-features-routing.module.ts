import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AssestComponent } from './speedchart/assest.component';
import { AssestLineComponent } from './speedchart/assestline.component';



const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'table',
    component: DataTableComponent,
  },
  {
    path: 'assestline',
    component: AssestLineComponent,
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
