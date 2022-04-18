import { Component, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
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
  }
  
