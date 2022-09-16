import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {LayoutComponent} from "./layout/layout.component";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {DoughnutComponent} from "./doughnut/doughnut.component";
import { BarComponent } from './bar/bar.component';
import { BubbleComponent } from './bubble/bubble.component';
import { HeaderComponent } from './header/header.component';
import {NgChartsModule} from "ng2-charts";
import { LineComponent } from './line/line.component';
import { PieComponent } from './pie/pie.component';
import { RadarComponent } from './radar/radar.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    DoughnutComponent,
    BarComponent,
    BubbleComponent,
    HeaderComponent,
    LineComponent,
    PieComponent,
    RadarComponent,
    PolarAreaComponent,
    ScatterComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NzLayoutModule,
        RouterModule,
        NzMenuModule,
        NgChartsModule
    ]
})
export class LayoutModule { }
