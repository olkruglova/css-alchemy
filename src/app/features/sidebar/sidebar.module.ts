import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [SharedModule],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [SidebarComponent],
})
export class SidebarModule {}
