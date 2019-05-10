import { AfterViewInit, Component, OnInit, OnDestroy, } from '@angular/core';
import { NbThemeService } from '@nebular/theme';


import { Event } from '../../../@core/data/event';

import { EventsService } from '../../../@core/service/events.service';

import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'ngx-speed-chart',
  templateUrl:'./speed-chart.component.html',
  styleUrls:['./speed-chart.component.scss']
})


export class SpeedChartComponent implements AfterViewInit, OnInit {
  [x: string]: any;
  url = 'http://localhost:8080/events';

  latitude = [];
  longitude = [];
  speed=[];
  chart = echarts;
  options: any = {};
  themeSubscription: any;
  time =[];

  ngOnInit() {

  }

  constructor(private theme: NbThemeService, private httpClient: HttpClient, private eventsService: EventsService) {
    this.eventsService.getEvents().subscribe((res: Event[]) => {
      res.forEach((item)=>{
        this.time.push(new Date (item.eventPK.timestamp * 1000).toLocaleString());
        this.speed.push(item.speed);
      });
      this.chartOptions();
      console.log('Speed items (constructor): ' + this.speed.length);
    });
  }
  ngAfterViewInit(){

  }

  chartOptions() {

    console.log('Speed items: ' + this.speed.length);
   

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: 'axis',
          formatter: '',
        },
        legend: {
          left: 'left',
          data: ['timestamp and speed'],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: this.time,
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

            type: 'value',
            data:this.speed,
            axisTick: {
              alignWithLabel: true,
            },
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
            name: 'timestamp and speed',
            type: 'line',
            data: this.speed,
            

          },

        ],
      };
    });
  }




  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();

  }
}




