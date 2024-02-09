import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [SidebarModule],
  exports: [MainComponent],
  providers: [],
  bootstrap: [MainComponent],
})
export class MainModule {}
