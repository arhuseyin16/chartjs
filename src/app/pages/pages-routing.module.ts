import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";
import {NgModule} from "@angular/core";
import {DoughnutComponent} from "./doughnut/doughnut.component";
import {BarComponent} from "./bar/bar.component";
import {BubbleComponent} from "./bubble/bubble.component";
import {LineComponent} from "./line/line.component";
import {PieComponent} from "./pie/pie.component";
import {RadarComponent} from "./radar/radar.component";
import {PolarAreaComponent} from "./polar-area/polar-area.component";
import {ScatterComponent} from "./scatter/scatter.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'doughnut',
        component: DoughnutComponent
      },
      {
        path: 'bar',
        component: BarComponent
      },
      {
        path: 'bubble',
        component: BubbleComponent
      },
      {
        path: 'line',
        component: LineComponent
      },
      {
        path: 'pie',
        component: PieComponent
      },
      {
        path: 'radar',
        component: RadarComponent
      },
      {
        path: 'polar-area',
        component: PolarAreaComponent
      },
      {
        path: 'scatter',
        component: ScatterComponent
      },
      {
        path: '',
        redirectTo: '/doughnut',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/doughnut',
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
