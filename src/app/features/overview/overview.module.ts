import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule],
  exports: [OverviewComponent],
  providers: [],
  bootstrap: [OverviewComponent],
})
export class OverviewModule {}
