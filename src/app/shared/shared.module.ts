import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, BrowserAnimationsModule, BrowserModule],
  exports: [
    TooltipComponent,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
