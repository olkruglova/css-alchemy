import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainComponent],
  imports: [SidebarModule, CommonModule],
  exports: [MainComponent],
  providers: [],
  bootstrap: [MainComponent],
})
export class MainModule {}
