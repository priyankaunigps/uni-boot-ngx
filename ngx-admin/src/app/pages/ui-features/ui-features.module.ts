import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { NguiMapModule } from '@ngui/map';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { DataTableComponent } from './data-table/data-table.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AssestComponent } from './speedchart/assest.component';
import { AssestLineComponent } from './speedchart/assestline.component';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';


const components = [
  UiFeaturesComponent,
  DataTableComponent,
  AssestComponent,
  GooglemapComponent,
  AssestLineComponent
  
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
    NgxEchartsModule
  ],
  declarations: [
    ...components,
  ],
  exports:[
    ...components,
   
  ]
})
export class UiFeaturesModule { }
