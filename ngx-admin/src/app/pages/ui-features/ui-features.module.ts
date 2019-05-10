import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { NguiMapModule } from '@ngui/map';
import {AgmCoreModule} from '@agm/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DataTableComponent } from './data-table/data-table.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { SpeedChartComponent } from './speed-chart/speed-chart.component';

const components = [
  UiFeaturesComponent,
  DataTableComponent,
  GooglemapComponent,
  SpeedChartComponent
  
];

@NgModule({
  imports: [
    ThemeModule,
    UiFeaturesRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NguiMapModule,
    NgxEchartsModule,
    AgmCoreModule
    
  ],
  declarations: [
    ...components,
  ],
  exports:[
    ...components,
   
  ]
})
export class UiFeaturesModule { }
