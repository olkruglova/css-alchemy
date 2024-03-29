import { Component, Input } from '@angular/core';

@Component({
  selector: 'cssalc-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() tooltipText: string = '';
}
