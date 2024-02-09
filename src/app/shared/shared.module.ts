import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [TooltipComponent],
  imports: [TooltipModule],
  exports: [TooltipComponent, TooltipModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
