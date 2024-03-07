import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { MainComponent } from './features/main/main.component';
import { OverviewComponent } from './features/overview/overview.component';

export interface RouteExt extends Route {
  data?: {
    name?: string;
    title?: string;
    subtitle?: string;
  };
}

export const appRoutes: RouteExt[] = [
  {
    path: 'guides',
    pathMatch: 'full',
    component: MainComponent,
    data: { name: 'guides', title: 'Guides' },
  },
  {
    path: 'overview',
    pathMatch: 'full',
    component: OverviewComponent,
    data: { name: 'overview', title: 'Overview' },
  },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
