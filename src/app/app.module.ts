import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, LayoutModule, SharedModule, FeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
