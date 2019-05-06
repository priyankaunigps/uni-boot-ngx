import { AfterViewInit, Component,OnInit, OnDestroy,} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {Charts } from 'chart.js';

import {Event } from './event'; 
import { Chart } from 'highcharts';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ngx-assestline',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
 

export class AssestLineComponent implements AfterViewInit,OnDestroy {
  Charts = [] ;
  options: any = {};
  themeSubscription: any;
  event: Event [];
  deviceId: [];
  timestamp: [];
  latitude: [];
  longitude: [];
  speed: [];
 
  constructor(private theme: NbThemeService,) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.event.getEvents().subscribe((res: Event[]) => {
        res.forEach(y => {
          this.latitude.push();
          this.longitude.push();
          this.timestamp.push();
          this.speed.push();
          this.deviceId.push();
        });
      
      
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: ['latitude', 'longitude', 'speed'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: [
          {
            name: 'latitude',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
            
          },
          {
            name: 'longitude',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
          },
          {
            name: 'speed',
            type: 'line',
            data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
          },
        ],
      };
    });
   } 
 )
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  
  }
}
 /* ngOnInit() {
    this.event.getEvents().subscribe((res: Event[]) => {
      res.forEach(y => {
        this.latitude.push();
        this.longitude.push();
        this.timestamp.push();
        this.speed.push();
        this.deviceId.push();
      });
      this.Charts = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.latitude,
          datasets: [
            {
              data: this.longitude,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
} */

