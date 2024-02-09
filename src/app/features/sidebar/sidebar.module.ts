import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { TreeModule } from 'primeng/tree';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, TreeModule, SharedModule],
  exports: [SidebarComponent],
  providers: [],
  bootstrap: [SidebarComponent],
})
export class SidebarModule {}
