import { NgModule } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { ThemeModule } from '../../@theme/theme.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

const components = [
  UiFeaturesComponent,
  DataTableComponent
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
    CdkTableModule
  ],
  declarations: [
    ...components,
  ],
})
export class UiFeaturesModule { }
