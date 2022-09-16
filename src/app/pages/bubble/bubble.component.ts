import { Component, OnInit } from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: false,
    scales: {
      x: {
        min: 0,
        max: 30,
      },
      y: {
        min: 0,
        max: 30,
      }
    }
  };
  public bubbleChartLegend = true;

  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
    },
    {
      data: [
        { x: 13, y: 4, r: 50 },
        { x: 10, y: 15, r: 10 },
        { x: 16, y: 22, r: 13 },
        { x: 17, y: 18, r: 8 },
      ],
      label: 'Series B',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
