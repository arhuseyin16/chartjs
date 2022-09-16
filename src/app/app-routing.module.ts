import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '',
    redirectTo: 'doughnut',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'doughnut',
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
