import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  // @ViewChild('lineChart') private lineCanvas: ElementRef | undefined;
  public lineChart:any;
  public  lineChart2:any;

  constructor() {}

  ngOnInit(){
  this.lineChartMethod();
  this.lineChartMethod2();
  }
  

  lineChartMethod() {

    this.lineChart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['June', 'March', 'April','July',
                 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
         datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
                 '574', '573', '576'],
            backgroundColor: 'blue',
            minBarLength:500,
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
                   '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      },
 
      
    });
  }


  lineChartMethod2() {

    this.lineChart2 = new Chart("MyChart2", {
        type: 'bar',
        data: {
          labels: ["1900", "1950", "1999", "2050"],
          datasets: [{
              label: "Europe",
              type: "line",
              borderColor: "#8e5ea2",
              data: [408,547,675,734],
              fill: false
            }, {
              label: "Africa",
              type: "line",
              borderColor: "#3e95cd",
              data: [133,221,783,2478],
              fill: false
            }
          ]
        },
        options: {
        aspectRatio:2.5
      },
    });
  }


  
  
}
