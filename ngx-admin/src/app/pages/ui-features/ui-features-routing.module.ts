import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SpeedChartComponent } from './speed-chart/speed-chart.component';




const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'table',
    component: DataTableComponent,
  },
  {
    path: 'speed-chart',
    component: SpeedChartComponent,
  }
 
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
