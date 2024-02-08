import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { MainComponent } from './features/main/main.component';

export interface RouteExt extends Route {
  data?: {
    name?: string;
    title?: string;
    subtitle?: string;
  };
}

export const appRoutes: RouteExt[] = [
  {
    path: 'main',
    pathMatch: 'full',
    component: MainComponent,
    data: { name: 'main', title: 'Main' },
  },
  { path: "**", redirectTo: "main", pathMatch: "full" }
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
