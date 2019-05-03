import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatProgressSpinnerModule, 
  MatCheckboxModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { NguiMapModule } from '@ngui/map';
import { AssestComponent } from './speedchart/assest.component';


const components = [
  UiFeaturesComponent,
  DataTableComponent,
  AssestComponent,
  GooglemapComponent,
  
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
  ],
  declarations: [
    ...components,
  ],
  exports:[
    ...components,
   
  ]
})
export class UiFeaturesModule { }
