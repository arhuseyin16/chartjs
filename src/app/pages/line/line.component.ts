import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {


  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      },
      {
        data: [ 15, 79, 30, 11, 96, 85, 70 ],
        label: 'Series B',
        fill: true,
        tension: 0.5,
        borderColor: 'gray',
        backgroundColor: 'rgba(254,90,80,10)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor() { }

  ngOnInit(): void {
  }

}
