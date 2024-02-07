import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [HeaderComponent],
  imports: [TabMenuModule],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [HeaderComponent],
})
export class HeaderModule {}
