import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { UiFeaturesModule } from '../ui-features/ui-features.module';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    UiFeaturesModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
