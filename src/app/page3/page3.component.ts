import { Component, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';


import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService, todo } from '../app.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})

export class Page3Component {
   /** Based on the screen size, switch from standard to one column per row */
   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Card 1', cols: 1, rows: 1 }];
      }

      return [{ title: 'Card 1', cols: 2, rows: 3 }];
    })
  );
  

  displayedColumns: string[] = [
    'type',
    'EMPID',
    'c_time',
    'EMPNM',
    'd_time',
    'state',
    'e_time'
  ];
  
  dataSource = new MatTableDataSource<todo>();
  constructor(
    private breakpointObserver: BreakpointObserver,
    public appService: AppService) {}
    public timerInterval:any;
  ngOnInit() {

    this.timerInterval =  setInterval(() => { 
       this.appService.getDeals().subscribe(
         (x) => {
           this.dataSource.data = x; 
           console.log(this.dataSource);
         },
         (error) => {}
       );
     }, 2000);
     }
     ngOnDestroy() {
       // Will clear when component is destroyed e.g. route is navigated away from.
       clearInterval(this.timerInterval);
    }
  color1 = new graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: '#1de9b6' },
    { offset: 0.5, color: '#1dd7d0' },
    { offset: 1, color: '#1dc4e9' }
  ]);

  color2 = new graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: '#f8a89f' },
    { offset: 0.5, color: '#f8a79e' },
    { offset: 1, color: '#ff887c' }
  ]);
  chartOptions: EChartsOption = {
    color: [
      this.color1,
      this.color2,
      '#626c91',
      '#a0a7e6',
      '#c4ebad',
      '#96dee8'
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      left: 16,
      itemGap: 30,
      icon: 'rect',
      textStyle: {
        align: 'left',
        padding: [0, 12, 0, 0]
      },
      data: ['P1', 'P2', 'P3', 'P4', 'P5']
    },
    series: [
      {
        name: 'Priority',
        type: 'pie',
        radius: ['56%', '70%'],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          borderWidth: 7,
          borderColor: '#fff'
        },
        data: [
          { value: 335, name: 'P1' },
          { value: 310, name: 'P2' },
          { value: 234, name: 'P3' },
          { value: 135, name: 'P4' },
          { value: 1548, name: 'P5' }
        ]
      }
    ]
  };
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
      }
    ]
  };
  chartOption2: EChartsOption = {
    legend: {
      top: 'side'
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 2
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' }
        ]
      }
    ]
  };
  chartOption4: EChartsOption  = {
    xAxis: {
      type: 'category', 
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }
    ]
  };
  }
  
