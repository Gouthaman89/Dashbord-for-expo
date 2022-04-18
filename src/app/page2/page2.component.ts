import { Component, OnInit, ViewChild,VERSION ,ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { MatTableDataSource } from '@angular/material/table';
import { productSales1 } from '../pie1data';
import { AppService,actimedata,productSales} from '../app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ApexLegend, ChartComponent } from "ng-apexcharts";
import { EChartsOption, graphic } from 'echarts';
//import { timeStamp } from 'console';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
};

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})

export class Page2Component implements OnInit {    
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>| any;
  public timerInterval:any;
  productSales1: any[] = [];
  displayedColumns: string[] = ['name','ac_time'];
  displayedColumns2: string[] = ['name','value'];
  dataSource = new MatTableDataSource<actimedata>();
  dataSource2 = new MatTableDataSource<productSales>();
  //isShown: boolean = true; // hidden by default
  //isShown1: boolean = false; // hidden by default
  @ViewChild("myNameElem_1") myNameElem_1: ElementRef;
  @ViewChild("myNameElem_2") myNameElem_2: ElementRef;
  constructor(public appService: AppService) {
   
    }
    chartOption1: EChartsOption = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        },
        axisLabel: {
          color: '#444',
          padding: [16, 0, 0, 0]
        },
        data: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7']
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#444'
          }
        },
        axisLabel: {
          color: '#444',
          padding: [0, 16, 0, 0]
        }
      },
      legend: {
        orient: 'horizontal',
        left: 16,
        align: 'left',
        data: ['Sla Met', 'Sla Unmet', 'Tickets Raised']
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          name: 'Sla Unmet',
          type: 'bar', 
          itemStyle: {
            color: '#d40915',
            borderColor: '#707070'
          }
        },
  
        {
          data: [10, 30, 15, 60, 10, 10, 30],
          name: 'Sla Met',
          type: 'bar',  
          itemStyle: {
            color: '#f1923f',
            borderColor: '#707070'
          }
        },
  
        {
          data: [20, 40, 55, 90, 100, 100, 60],
          type: 'bar',
          name: 'Tickets Raised',  
          itemStyle: {
            color: '#20c5be',
            borderColor: '#707070'
          }
        },
        {
          data: [20, 40, 55, 90, 100, 100, 60],
          type: 'bar',
          name: 'Tickets Raised',  
          itemStyle: {
            color: '#20c5be',
            borderColor: '#707070'
          }
        }
      ]
    };
    chartOption5: EChartsOption ={
      title: {
        text: "chart1",
         
        textStyle: {
          color: "lightgrey"
        }
      },
      tooltip: {
        show:true,
        trigger: 'item',
        formatter: "{a} {b}：<br/> {c}%"
      },
      series: [
        {
          type: 'gauge',
           
          axisLine: {       
            lineStyle: { 
              width: 10,color: [[0.80, '#cc3700'],[0.90, '#1e90ff'],[1, 'Lime']],
            },
          },
          splitLine: { 
            lineStyle: { shadowColor : '#fff', shadowBlur: 5 }
          },
          axisTick:{ splitNumber:10 },
          pointer:{ length: "95%" },
          detail: {fontSize:3, offsetCenter:[5,75],formatter:'{value}%'},
          name: "test",
          data: [{value: 20 }]
        },{
          name: 'Ok',
          type: 'gauge',							
          radius: '50%',   //Dummy necessary 
          axisLine: {            // 坐标轴线//Dummy necessary 
            lineStyle: {       // 属性lineStyle控制线条样式//Dummy necessary 
              width: 0,color: [[1, '#339FFF'] ]//Dummy necessary 
              //width: 3,color: [[1, '#000000'] ]//Dummy necessary 
            }
          },
          axisTick: {            // 坐标轴小标记//Dummy necessary 
            show:false//Dummy necessary 
          },axisLabel: {
            show: false
          },
            splitLine: {           // 分隔线
            show:false
                },
           pointer: {
            show:false//Dummy necessary 
          } ,
           
            detail: {offsetCenter:[-78,110],formatter:'OK:{value}'  }, 
          data:[{value:0 }]
        },{
          name: 'PQTY',
          type: 'gauge',							
          radius: '10%',   //Dummy necessary 
          axisLine: {            // 坐标轴线//Dummy necessary 
            lineStyle: {       // 属性lineStyle控制线条样式//Dummy necessary 
              width: 0,color: [[1, '#339FFF'] ]//Dummy necessary 
              //width: 3,color: [[1, '#000000'] ]//Dummy necessary 
            }
          },
          axisTick: {            // 坐标轴小标记//Dummy necessary 
            show:false//Dummy necessary 
          },axisLabel: {
            show: false
          },
          splitLine: {           // 分隔线
            show:false
                },
           pointer: {
            show:false//Dummy necessary 
          } ,
           
            detail: {  offsetCenter:[70,110],formatter:'PQTY:{value}'}, 
          data:[{value:0 }]
        }
      ]
    };

  ngOnInit() {


}
//ngOnDestroy() {
  // Will clear when component is destroyed e.g. route is navigated away from.
 // clearInterval(this.timerInterval);
//}
 
}
