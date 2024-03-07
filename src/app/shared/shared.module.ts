import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [TooltipComponent],
  imports: [CommonModule, BrowserAnimationsModule, BrowserModule, RouterModule, LayoutModule],
  exports: [
    TooltipComponent,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
